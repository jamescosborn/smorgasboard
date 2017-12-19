import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
  providers: [ArticleService]
})
export class FrontpageComponent implements OnInit {
  // articles: FirebaseListObservable<any[]>;
  articles: Array<any>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    console.log(this.articles);
  }

  goToDetailPage(clickedArticle) {
    this.router.navigate(['articles', 0]);
  };
}
