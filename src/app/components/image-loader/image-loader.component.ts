import {Component, Input, Renderer2} from '@angular/core';

@Component({
    selector: 'app-image-loader',
    templateUrl: './image-loader.component.html',
    styleUrls: ['./image-loader.component.scss'],
})
export class ImageLoaderComponent {

    @Input() image: string;

    constructor(private renderer: Renderer2) {
    }

    ionViewWillEnter() {
    }

    imageLoad(event: any) {
        if (event && event.target) {
            const imageWrapper = event.path[1];
            this.renderer.addClass(imageWrapper, 'loaded');
        }
    }
}
