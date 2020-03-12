import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ResetPasswordComponent} from './reset-password.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [ResetPasswordComponent],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: '', component: ResetPasswordComponent}])
    ]
})
export class ResetPasswordModule {
}
