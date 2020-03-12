import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

    formReset: FormGroup;

    constructor(private fb: FormBuilder,
                private alertService: AlertService,
                private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit() {
        this.formReset = this.fb.group({
            email: ['', [Validators.required]]
        });
    }

    resetPassword() {
        this.loginService.resetPassword(this.formReset.value.email).subscribe(res => {
            if (res.status === 1) {
                this.alertService.onToast('Ссылка для восстановления пароля отправлена вам на почту!', 'success');
                this.router.navigate(['login']);
            } else {
                this.alertService.onToast(res.msg, 'danger');
            }
        });
    }

}
