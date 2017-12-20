import { Component, OnInit } from '@angular/core';
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

  newData: Object = {};
  dataTypes: Object = {
    ['head']: {input: 'Title', type: 'string'},
    ['byline']: {input: 'Byline', type: 'string'},
    ['avatar']: {input: 'Avatar (URL)', type: 'string'},
    ['body']: {input: 'Body', type: 'textarea'},
    ['image']: {input: 'Image (URL)', type: 'string'},
    ['tags']: {input: 'Tags (separate by comma)', type: 'string'},
    ['featured']: {input: 'Featured', type: 'bool'}
  }

  dataKeys = Object.keys(this.dataTypes);

  ngOnInit() {
  }

  submitForm() {
    let data: any = Object.assign({}, this.newData);
    this.newData = {};
    while (data.tags.indexOf(', ') != -1) {
      data.tags = data.tags.replace(", ", ",");
    }
    data.tags = data.tags.split(",");
    const newArticle: Article = new Article(data);
    this.articleService.addArticle(newArticle);
  }
}
