import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../../../../services/profile.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../../../services/service.service';

@Component({
    selector: 'app-item-message',
    templateUrl: './item-message.component.html',
    styleUrls: ['./item-message.component.scss'],
})
export class ItemMessageComponent implements OnInit {

    userId: number;
    user: any;
    listMessage: any[];

    @ViewChild('content', {static: true}) content: any;

    formMessage: FormGroup;

    constructor(private route: ActivatedRoute,
                private profileService: ProfileService,
                private fb: FormBuilder,
                private serviceService: ServiceService) {
    }

    ngOnInit() {
        this.formMessage = this.fb.group({
            message: ['', [Validators.required]]
        });
    }

    ionViewWillEnter() {
        this.getListMessage();
    }

    getListMessage() {
        this.userId = +this.route.snapshot.paramMap.get('id');

        this.profileService.getListMessageForUser(this.userId).subscribe(res => {
            this.user = res.user;
            this.listMessage = res.messages;

            this.scrollToBottom();
        });
    }

    scrollToBottom() {
        setTimeout(() => {
            this.content.scrollToBottom(300);
        }, 300);
    }

    sendMessage() {
        if (this.formMessage.valid) {
            this.serviceService.sendMessage({
                id: this.userId,
                text: this.formMessage.value.message,
                service_or_product: null,
                ad_type: null,
            }).subscribe(response => {
                this.getListMessage();
                console.log(response);
            });
        }
    }

}
