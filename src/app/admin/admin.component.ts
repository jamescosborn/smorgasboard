import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {
  constructor(private articleService: ArticleService) { }
  newArticle: Article;

  ngOnInit() {
    this.newArticle = new Article({});
  }

  submitForm() {
    let data: any = Object.assign({}, this.newArticle.data);
    this.newArticle.data = {};
    while (data.tags.indexOf(', ') != -1) {
      data.tags = data.tags.replace(", ", ",");
    }
    data.tags = data.tags.split(",");
    const newArticle: Article = new Article(data);
    this.articleService.addArticle(newArticle);
  }
}
