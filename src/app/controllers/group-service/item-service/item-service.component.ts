import {Component} from '@angular/core';
import {ServiceService} from '../../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-item-service',
    templateUrl: './item-service.component.html',
    styleUrls: ['./item-service.component.scss'],
})
export class ItemServiceComponent {

    id: number;
    itemService: any;

    headerImage: any;
    listImage: any[];

    constructor(private serviceService: ServiceService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ionViewWillEnter() {
        this.id = +this.route.snapshot.paramMap.get('service');
        this.serviceService.getService(this.id).subscribe(res => {
            this.itemService = res;

            this.headerImage = this.itemService.images.find(x => x.fl === 1) || this.itemService.images[0];
            this.listImage = this.itemService.images;
        });
    }

    nextPhoto() {
        if (this.listImage.length > (this.listImage.indexOf(this.headerImage) + 1)) {
            this.headerImage = this.listImage[this.listImage.indexOf(this.headerImage) + 1];
        }
    }

    prevPhoto() {
        if ((this.listImage.indexOf(this.headerImage) - 1) >= 0) {
            this.headerImage = this.listImage[this.listImage.indexOf(this.headerImage) - 1];
        }
    }

}
