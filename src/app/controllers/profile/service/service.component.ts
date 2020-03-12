import {Component} from '@angular/core';
import {ServiceService} from '../../../services/service.service';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {

    listService: any[];

    constructor(private serviceService: ServiceService) {
    }

    ionViewWillEnter() {
        this.getListService();
    }

    getListService() {
        this.serviceService.getListServiceForUser().subscribe(res => {
            this.listService = res;
        });
    }
}
