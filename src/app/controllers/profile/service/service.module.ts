import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ServiceComponent} from './service.component';
import {IonicModule} from '@ionic/angular';

const routes = [
    {path: '', component: ServiceComponent},
    {path: 'add', loadChildren: () => import('./add-service/add-service.module').then(m => m.AddServiceModule)},
    {path: ':id', loadChildren: () => import('./edit-service/edit-service.module').then(m => m.EditServiceModule)}
];

@NgModule({
    declarations: [ServiceComponent],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class ServiceModule {
}
