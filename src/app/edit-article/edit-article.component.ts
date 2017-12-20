import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService]
})

export class EditArticleComponent implements OnInit {
  @Input() selectedArticle;

  dataTypes = Article.dataTypes;
  dataKeys = Object.keys(Article.dataTypes);
  articleData: any;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log(this.selectedArticle);
    this.articleData = this.selectedArticle.data;
  }
}
