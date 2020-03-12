import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ContactUserComponent} from './contact-user.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [ContactUserComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: ContactUserComponent}]),
        ReactiveFormsModule
    ]
})
export class ContactUserModule {
}
