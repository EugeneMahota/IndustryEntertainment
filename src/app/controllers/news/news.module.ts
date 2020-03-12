import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {NewsComponent} from './news.component';
import {IonicModule} from '@ionic/angular';
import {ItemNewsComponent} from './item-news/item-news.component';
import {LoadingModule} from '../../components/loading/loading.module';
import {ImageLoaderModule} from '../../components/image-loader/image-loader.module';

const routes: Route[] = [
    {path: '', component: NewsComponent},
    {path: ':id', component: ItemNewsComponent}
];

@NgModule({
    declarations: [
        NewsComponent,
        ItemNewsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IonicModule,
        LoadingModule,
        ImageLoaderModule
    ]
})
export class NewsModule {
}
