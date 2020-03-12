import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EditServiceComponent} from './edit-service.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [EditServiceComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: EditServiceComponent}])
    ]
})
export class EditServiceModule {
}
