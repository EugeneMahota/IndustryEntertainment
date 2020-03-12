import {Component, OnInit} from '@angular/core';
import {Sim} from '@ionic-native/sim/ngx';
import {Platform} from '@ionic/angular';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-fast-register',
    templateUrl: './fast-register.component.html',
    styleUrls: ['./fast-register.component.scss'],
})
export class FastRegisterComponent implements OnInit {


    formRegister: FormGroup;

    constructor(private sim: Sim,
                private platform: Platform,
                private loginService: LoginService,
                private fb: FormBuilder,
                private alert: AlertService) {
    }

    ngOnInit() {
        this.initFormRegister();
    }

    ionViewWillEnter() {

    }

    initFormRegister() {
        this.formRegister = this.fb.group({
            phone: ['', [Validators.required]]
        });

        this.platform.ready().then(() => {
            this.sim.requestReadPermission().then(
                () => {
                    this.sim.getSimInfo().then(
                        (info) => {
                            console.log(info);
                            if (!info.phoneNumber) {
                                this.alert.onToast('Не удалось прочитать номер телефона, заполните поле, пожалуйста.', 'danger');
                            } else {
                                this.formRegister.controls['phone'].setValue(info.phoneNumber);
                            }
                        },
                        (err) => {
                            this.alert.onToast('Произошла ошибка, заполните поле, пожалуйста.', 'danger');
                        }
                    );
                },
                (err) => this.alert.onToast('Вы не дали разрешение прочитать номер телефона, заполните поле, пожалуйста.', 'danger')
            );
        });
    }

    registerUser() {
        this.loginService.fastRegisterUser(this.formRegister.value)
            .subscribe(res => {
                if (res.status === 1) {
                    this.alert.onToast(res.msg, 'success');
                } else {
                    this.alert.onToast(res.msg, 'danger');
                }
            }, err => {
                this.alert.onToast(err.message, 'danger');
            });
    }
}
