import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FastRegisterComponent} from './fast-register.component';
import {Sim} from '@ionic-native/sim/ngx';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [FastRegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: FastRegisterComponent}]),
        IonicModule,
        ReactiveFormsModule
    ],
    providers: [
        Sim
    ]
})
export class FastRegisterModule {
}
