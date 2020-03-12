import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MessageComponent} from './message.component';
import {IonicModule} from '@ionic/angular';
import {ItemMessageComponent} from './item-message/item-message.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoadingModule} from '../../../components/loading/loading.module';

const routes: Route[] = [
    {path: '', component: MessageComponent},
    {path: ':id', component: ItemMessageComponent}
];

@NgModule({
    declarations: [MessageComponent, ItemMessageComponent],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        LoadingModule
    ]
})
export class MessageModule {
}
