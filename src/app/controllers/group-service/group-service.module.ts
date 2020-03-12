import {IonicModule} from '@ionic/angular';
import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GroupServiceComponent} from './group-service.component';

const routes: Route[] = [
    {path: '', component: GroupServiceComponent},
    {path: ':group', loadChildren: () => import('./item-group-service/item-group-service.module').then(m => m.ItemGroupServiceModule)},
    {path: ':group/:service', loadChildren: () => import('./item-service/item-service.module').then(m => m.ItemServiceModule)},
    {path: ':group/:service/:user', loadChildren: () => import('./contact-user/contact-user.module').then(m => m.ContactUserModule)}
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [GroupServiceComponent]
})
export class GroupServiceModule {
}
