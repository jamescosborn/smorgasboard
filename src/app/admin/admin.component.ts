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
    this.newArticle = new Article({});
    const newArticle: Article = new Article(data);
    newArticle.convertTags();
    newArticle.timeStamp();
    newArticle.save(this.articleService);
  }
}
