import {Component} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {AlertService} from '../../services/alert.service';
import {LoginService} from '../../services/login.service';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {

    infoUser: any;

    constructor(private profileService: ProfileService,
                private alertService: AlertService,
                private alertController: AlertController,
                private loginService: LoginService) {
    }

    ionViewWillEnter() {
        this.profileService.getInfoUser().subscribe(res => {
            this.infoUser = res;
        });
    }

    async onExit() {
        const confirm = await this.alertController.create({
            header: 'Выход',
            message: 'Вы уверены, что хотите выйти из аккаунта?',
            mode: 'md',
            buttons: [
                {
                    text: 'Да',
                    handler: value => this.loginService.exitAccount()
                },
                {
                    text: 'Нет',
                    role: 'cancel'
                }
            ]
        });

        await confirm.present();
    }
}
