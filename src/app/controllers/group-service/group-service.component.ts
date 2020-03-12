import {Component} from '@angular/core';
import {ServiceService} from '../../services/service.service';

@Component({
    selector: 'app-group-service',
    templateUrl: 'group-service.component.html',
    styleUrls: ['group-service.component.scss']
})
export class GroupServiceComponent {

    listGroup: any;

    constructor(private serviceService: ServiceService) {
    }

    ionViewWillEnter() {
        this.serviceService.getListGroup().subscribe(res => {
            this.listGroup = res;
        });
    }
}
