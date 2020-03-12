import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    formRegister: FormGroup;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private router: Router,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.initFormRegister();
    }

    ionViewWillEnter() {

    }

    initFormRegister() {
        this.formRegister = this.fb.group({
            email: ['', Validators.required],
            phone: ['', Validators.required],
            name: ['', Validators.required],
            password: ['', Validators.required],
            password_confirmation: ['', Validators.required],
        });
    }

    registerUser() {
        this.loginService.registerUser(this.formRegister.value).subscribe(res => {
            if (res.token) {
                localStorage.setItem('token', res.token);
                this.router.navigate(['menu']);
            } else {
                console.log(res);
            }
        }, err => {
            this.alertService.onToast(err.message, 'danger');
        });
    }
}
