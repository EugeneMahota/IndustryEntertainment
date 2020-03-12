import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;

    constructor(private fb: FormBuilder,
                private alert: AlertService,
                private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit() {
        this.initFormLogin();
    }

    ionViewWillEnter() {

    }

    initFormLogin() {
        this.formLogin = this.fb.group({
            login: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    login() {
        this.loginService.login(this.formLogin.value)
            .subscribe(res => {
                if (res.token) {
                    this.router.navigate(['menu']);
                }
            }, err => {
                console.log(err);
                this.alert.onToast(err.message, 'danger');
            });
    }

}
