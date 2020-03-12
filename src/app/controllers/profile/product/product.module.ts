import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [ProductComponent],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule.forChild([{path: '', component: ProductComponent}])
    ]
})
export class ProductModule {
}
