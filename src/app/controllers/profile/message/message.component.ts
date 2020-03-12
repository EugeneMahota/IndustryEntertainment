import {Component} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
})
export class MessageComponent {

    listMessage: any[];

    constructor(private profileService: ProfileService) {
    }

    ionViewWillEnter() {
        this.profileService.getListMessage().subscribe(res => {
            this.listMessage = res;
        });
    }

}
