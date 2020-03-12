import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AddServiceComponent} from './add-service.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [AddServiceComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: AddServiceComponent}])
    ]
})
export class AddServiceModule {
}
