import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ItemGroupServiceComponent} from './item-group-service.component';
import {ImageLoaderModule} from '../../../components/image-loader/image-loader.module';


@NgModule({
    declarations: [ItemGroupServiceComponent],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule.forChild([{path: '', component: ItemGroupServiceComponent}]),
        ImageLoaderModule
    ]
})
export class ItemGroupServiceModule {
}
