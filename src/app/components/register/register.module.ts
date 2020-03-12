import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: RegisterComponent}]),
        IonicModule,
        ReactiveFormsModule
    ]
})
export class RegisterModule {
}
