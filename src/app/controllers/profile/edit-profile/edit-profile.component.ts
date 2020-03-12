import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent, IonSlides} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {Router} from '@angular/router';

import {File} from '@ionic-native/file/ngx';
import {AlertService} from '../../../services/alert.service';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

    userData: any;
    imageProfile: any;

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    scrollTop: number;

    segment: number = 0;
    @ViewChild('slider', {static: true}) slider: IonSlides;
    @ViewChild('content', {static: true}) content: IonContent;

    formUser: FormGroup;

    pathImage: string;

    constructor(private fb: FormBuilder,
                private profileService: ProfileService,
                private imagePicker: ImagePicker,
                private router: Router,
                private file: File,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.formUser = this.fb.group({
            name: ['', []],
            email: ['', []],
            phone: ['', [Validators.required]],
            description: ['', []],
            url: ['', []],

            autologin: ['', [Validators.required]],
            push_forum: ['', [Validators.required]],
            push_smm: ['', [Validators.required]],
            push_news: ['', [Validators.required]]
        });
    }

    ionViewWillEnter() {
        this.profileService.getInfoUser().subscribe(user => {
            this.userData = user;
            this.formUser.controls['name'].setValue(user.name);
            this.formUser.controls['email'].setValue(user.email);
            this.formUser.controls['phone'].setValue(user.phone);
            this.formUser.controls['description'].setValue(user.description);
            this.formUser.controls['url'].setValue(user.url);
        });

        this.profileService.getInfoSettings().subscribe(settings => {
            this.formUser.controls['autologin'].setValue(settings.autologin);
            this.formUser.controls['push_forum'].setValue(settings.push_forum);
            this.formUser.controls['push_smm'].setValue(settings.push_smm);
            this.formUser.controls['push_news'].setValue(settings.push_news);
        });
    }

    checkFile() {
        const options = {
            width: 200,
            quality: 25,
            outputType: 1,
            maximumImagesCount: 1
        };

        this.imagePicker.getPictures(options).then((results) => {
            if (results.length > 0) {
                let name = results[0].substring(results[0].lastIndexOf('/') + 1);
                let path = results[0].substring(0, results[0].lastIndexOf('/') + 1);
                this.readFile(path, name);
            }
        }, (err) => {
            console.log(err);
        });
    }

    readFile(path: string, name: string) {
        this.file.readAsDataURL(path, name).then((base64string) => {
            this.pathImage = base64string;
            this.imageProfile = this.dataURItoBlob(base64string);
        });
    }

    dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to an ArrayBuffer
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var _ia = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            _ia[i] = byteString.charCodeAt(i);
        }
        var dataView = new DataView(arrayBuffer);
        var blob = new Blob([dataView], {type: mimeString});
        return blob;
    }


    editUser(user: any) {
        const userData: FormData = new FormData();
        userData.append('name', user.name);
        userData.append('email', user.email);
        userData.append('phone', user.phone);
        userData.append('description', user.description);
        userData.append('url', user.url);

        userData.append('image', this.imageProfile || '');

        this.profileService.putInfoUser(userData).subscribe(res => {
            if (res.status === 1) {
                this.router.navigate(['menu', 'profile']);
                this.alertService.onToast('Данные успешно изменены!', 'success');
            } else {
                this.alertService.onToast(res.msg, 'danger');
            }
        });
    }

    updateSettings(settings: any) {
        this.profileService.putSettingsUser({
            autologin: +settings.autologin,
            push_smm: +settings.push_smm,
            push_forum: +settings.push_forum,
            push_news: +settings.push_news
        }).subscribe(res => {
            if (res.status === 1) {
                this.router.navigate(['menu', 'profile']);
                this.alertService.onToast('Данные успешно изменены!', 'success');
            } else {
                this.alertService.onToast(res.msg, 'danger');
            }
        });
    }

    async segmentChanged() {
        await this.slider.slideTo(this.segment);
        await this.content.scrollToTop(this.scrollTop);
    }

    async slideChanged() {
        this.segment = await this.slider.getActiveIndex();
        await this.content.scrollToTop(this.scrollTop);
    }

}
