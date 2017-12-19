import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {

  articleId: string;
  articleToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = urlParameters['id'];
      this.articleToDisplay = this.articleService.getArticleById(this.articleId);
    });
  }



}
