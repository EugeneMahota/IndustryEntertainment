import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile.component';
import {LoadingModule} from '../../components/loading/loading.module';

const routes = [
    {path: '', component: ProfileComponent},
    {path: 'edit', loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule)},
    {path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)},
    {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
    {path: 'message', loadChildren: () => import('./message/message.module').then(m => m.MessageModule)}
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        LoadingModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}
