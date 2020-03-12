import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ItemServiceComponent} from './item-service.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [ItemServiceComponent],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule.forChild([{path: '', component: ItemServiceComponent}])
    ]
})
export class ItemServiceModule {
}
