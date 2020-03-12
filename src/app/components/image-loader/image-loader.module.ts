import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ImageLoaderComponent} from './image-loader.component';


@NgModule({
    declarations: [ImageLoaderComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [ImageLoaderComponent]
})
export class ImageLoaderModule {
}
