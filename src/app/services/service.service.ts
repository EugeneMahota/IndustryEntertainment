import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptionsJson = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; application/json; charset=utf-8'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    constructor(private http: HttpClient) {
    }

    getListGroup(): Observable<any> {
        return this.http.get(environment.apiUrl + '/services/groups', httpOptionsJson);
    }

    getListService(idGroup: number): Observable<any> {
        return this.http.post(environment.apiUrl + '/services/list', JSON.stringify({id: idGroup}), httpOptionsJson);
    }

    getService(idService: number): Observable<any> {
        return this.http.post(environment.apiUrl + '/services/info', JSON.stringify({id: idService}), httpOptionsJson);
    }

    getDataUser(idUser: number): Observable<any> {
        return this.http.post(environment.apiUrl + '/services/user', JSON.stringify({id: idUser}), httpOptionsJson);
    }

    sendMessage(message: any): Observable<any> {
        return this.http.post(environment.apiUrl + '/send_message', JSON.stringify(message), httpOptionsJson);
    }

    getListServiceForUser(): Observable<any> {
        return this.http.get(environment.apiUrl + '/user/services', httpOptionsJson);
    }
}
