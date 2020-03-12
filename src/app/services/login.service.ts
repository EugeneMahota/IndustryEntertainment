import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

const httpOptionsJson = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; application/json; charset=utf-8'
    })
};

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private router: Router) {
    }

    registerUser(dataUser: any): Observable<any> {
        return this.http.post(environment.apiUrl + '/register', JSON.stringify(dataUser), httpOptionsJson)
            .pipe(map(res => {
                if (res['token']) {
                    localStorage.setItem('token', res['token']);
                    this.router.navigate(['menu']);
                }

                return res;
            }));
    }

    fastRegisterUser(dataUser: any): Observable<any> {
        return this.http.post(environment.apiUrl + '/fast_register', JSON.stringify(dataUser), httpOptionsJson)
            .pipe(map(res => {
                if (res['token']) {
                    localStorage.setItem('token', res['token']);
                    this.router.navigate(['menu']);
                }

                return res;
            }));
    }

    login(dataUser: any): Observable<any> {
        return this.http.post(environment.apiUrl + '/login', JSON.stringify(dataUser), httpOptionsJson)
            .pipe(map(res => {
                if (res['token']) {
                    localStorage.setItem('token', res['token']);
                    this.router.navigate(['menu']);
                }

                return res;
            }));
    }

    checkLogin() {
        if (!localStorage.getItem('token')) {
            return false;
        } else {
            return this.http.get(environment.apiUrl + '/info_user')
                .pipe(map(res => {
                    if (res['id']) {
                        return true;
                    } else {
                        this.router.navigate(['login']);
                        return false;
                    }
                }));
        }
    }

    resetPassword(mail: string): Observable<any> {
        return this.http.post(environment.apiUrl + '/reset_pass', JSON.stringify({email: mail}), httpOptionsJson);
    }

    exitAccount() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
