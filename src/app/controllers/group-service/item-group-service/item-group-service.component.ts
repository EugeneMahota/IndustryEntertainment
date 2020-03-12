import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-item-group-service',
    templateUrl: './item-group-service.component.html',
    styleUrls: ['./item-group-service.component.scss'],
})
export class ItemGroupServiceComponent {

    listService: any;
    id: number;

    constructor(private serviceService: ServiceService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ionViewWillEnter() {
        this.id = +this.route.snapshot.paramMap.get('group');

        this.serviceService.getListService(this.id).subscribe(res => {
            this.listService = res;
        });
    }

}
