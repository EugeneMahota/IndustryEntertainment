import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MenuRoutingModule} from './menu-routing.module';

import {MenuComponent} from './menu.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MenuRoutingModule
    ],
    declarations: [MenuComponent]
})
export class MenuModule {
}
