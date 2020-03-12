import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptionsMulti = {
    headers: new HttpHeaders({
        'Accept': 'multipart/form-data; boundary'
    })
};

const httpOptionsJson = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; application/json; charset=utf-8'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) {
    }

    getInfoUser(): Observable<any> {
        return this.http.get(environment.apiUrl + '/info_user', httpOptionsJson);
    }

    getInfoSettings(): Observable<any> {
        return this.http.get(environment.apiUrl + '/info_setting', httpOptionsJson);
    }

    putInfoUser(user: FormData): Observable<any> {
        return this.http.post(environment.apiUrl + '/edit_user', user, httpOptionsMulti);
    }

    putSettingsUser(settings: any): Observable<any> {
        return this.http.post(environment.apiUrl + '/edit_setting', JSON.stringify(settings), httpOptionsJson);
    }

    getListMessage(): Observable<any> {
        return this.http.get(environment.apiUrl + '/user/messages', httpOptionsJson);
    }

    getListMessageForUser(userId: number): Observable<any> {
        return this.http.post(environment.apiUrl + '/user/messages_user', JSON.stringify({id: userId}), httpOptionsJson);
    }
}
