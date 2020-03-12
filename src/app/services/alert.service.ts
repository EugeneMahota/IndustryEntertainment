import {Injectable} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private alertController: AlertController,
                private toastController: ToastController) {
    }

    async onToast(msg: string, colorToast: string) {
        await this.toastController.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            color: colorToast,
            animated: true,
            mode: 'ios',
            buttons: [
                {
                    icon: 'close',
                    role: 'cancel'
                }
            ]
        }).then(newToast => {
            newToast.present();
        });
    }
}
