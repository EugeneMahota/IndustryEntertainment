import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: LoginComponent}]),
        IonicModule,
        ReactiveFormsModule
    ]
})
export class LoginModule {
}
