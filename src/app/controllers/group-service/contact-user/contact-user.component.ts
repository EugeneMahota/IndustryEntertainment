import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../../services/service.service';
import {AlertController} from '@ionic/angular';
import {AlertService} from '../../../services/alert.service';

@Component({
    selector: 'app-contact-user',
    templateUrl: './contact-user.component.html',
    styleUrls: ['./contact-user.component.scss'],
})
export class ContactUserComponent {

    serviceId: number;
    userId: number;
    user: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private serviceService: ServiceService,
                private alertController: AlertController,
                private alertService: AlertService) {
    }

    ionViewWillEnter() {
        this.userId = +this.route.snapshot.paramMap.get('user');
        this.serviceId = +this.route.snapshot.paramMap.get('service');

        this.serviceService.getDataUser(this.userId).subscribe(res => {
            this.user = res;
        });
    }

    async messageForm() {
        const alert = await this.alertController.create({

            header: 'Написать сообщение',
            inputs: [{
                name: 'message',
                type: 'text',
                value: ''
            }],
            buttons: [
                {
                    text: 'Отправить',
                    cssClass: 'primary',
                    handler: (value) => {
                        if (!value.message) {
                            this.alertService.onToast('Введите текст сообщения!', 'danger');
                        } else {
                            this.serviceService.sendMessage({
                                id: this.userId,
                                service_or_product: this.serviceId,
                                ad_type: 48,
                                text: value.message
                            }).subscribe(res => {
                                if (res.status === 1) {
                                    this.router.navigate(['menu', 'profile', 'message', this.userId]);
                                } else {
                                    this.alertService.onToast(res.msg, 'danger');
                                }
                            }, err => {
                                this.alertService.onToast(err.message, 'danger');
                            });
                        }
                    }
                },
                {
                    text: 'Отмена',
                    role: 'Cancel',
                    cssClass: 'media'
                }
            ]
        });

        await alert.present();
    }

}
