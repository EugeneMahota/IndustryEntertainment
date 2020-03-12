import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent {

    showMenu: boolean;

    constructor(private router: Router) {
        this.router.events.subscribe(router => {
            if (router instanceof NavigationEnd) {
                if (router.url === '/menu/news') {
                  this.showMenu = true;
                } else if (router.url === '/menu/group-service') {
                  this.showMenu = true;
                } else if (router.url === '/menu/forum') {
                  this.showMenu = true;
                } else if (router.url === '/menu/product') {
                  this.showMenu = true;
                } else if (router.url === '/menu/profile') {
                  this.showMenu = true;
                } else if (router.url === '/menu') {
                  this.showMenu = true;
                } else if (router.url === '/') {
                  this.showMenu = true;
                } else {
                  this.showMenu = false;
                }
            }
        });
    }

}
