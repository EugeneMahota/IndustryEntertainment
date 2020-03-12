import {Component, OnInit, Renderer2} from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

    listNews: any;

    constructor(private newsService: NewsService, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.newsService.getListNews().subscribe(res => {
            this.listNews = res;
        });
    }

    imageLoad(event: any) {
        if (event && event.target) {
            const imageWrapper = event.path[1];

            this.renderer.addClass(imageWrapper, 'loaded');
        }
    }
}
