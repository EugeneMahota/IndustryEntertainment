import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AlertService} from '../services/alert.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    listException: any[] = ['/fast_register', '/register', '/login', '/reset_pass'];

    constructor(private router: Router, private alertService: AlertService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.listException.indexOf(request.url.replace(environment.apiUrl, '')) !== -1) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/x-www-form-urlencoded; application/json; charset=utf-8'
                }
            });
        } else {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        }

        return next.handle(request).pipe(tap((res: HttpEvent<any>) => {
            if (res instanceof HttpResponse) {
                if (res.body.status === 'Token is Invalid' || res.body.status === 'Token is Expired') {
                    this.router.navigate(['login']);
                }
            }

        }, error => {
            this.alertService.onToast(error.message, 'danger');
        }));
    }
}
