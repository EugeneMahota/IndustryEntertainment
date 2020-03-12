import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EditProfileComponent} from './edit-profile.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import {LoadingModule} from '../../../components/loading/loading.module';

@NgModule({
    declarations: [EditProfileComponent],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: '', component: EditProfileComponent}]),
        LoadingModule
    ],
    providers: [File]
})
export class EditProfileModule {
}
