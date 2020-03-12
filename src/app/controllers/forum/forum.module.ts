import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ForumComponent} from './forum.component';
import {IonicModule} from '@ionic/angular';
import {LoadingModule} from '../../components/loading/loading.module';


@NgModule({
    declarations: [ForumComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: ForumComponent}]),
        IonicModule,
        LoadingModule
    ]
})
export class ForumModule {
}
