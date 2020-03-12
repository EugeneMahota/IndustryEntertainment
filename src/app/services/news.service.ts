import { Injectable } from '@angular/core';
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
export class NewsService {

  constructor(private http: HttpClient) { }

  getListNews(): Observable<any> {
    return this.http.get(environment.apiUrl + '/news/list', httpOptionsJson);
  }

  getItemNews(newsId: number): Observable<any> {
    return this.http.post(environment.apiUrl + '/news/info', JSON.stringify({id: newsId}), httpOptionsJson);
  }
}
