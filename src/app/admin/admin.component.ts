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

  ngOnInit() {
  }

  // submitForm(title: string, artist: string, description: string) {
  //   const newArticle: Article = new Article(title, artist, description);
  //   this.articleService.addArticle(newArticle);
  // }
}
