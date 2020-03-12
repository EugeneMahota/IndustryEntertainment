import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../../../services/news.service';

@Component({
    selector: 'app-item-news',
    templateUrl: './item-news.component.html',
    styleUrls: ['./item-news.component.scss'],
})
export class ItemNewsComponent {

    id: number;
    itemNews: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private newsService: NewsService) {
    }

    ionViewWillEnter() {
        this.id = +this.route.snapshot.paramMap.get('id');

        this.newsService.getItemNews(this.id).subscribe(res => {
            this.itemNews = res;
        });
    }

}
