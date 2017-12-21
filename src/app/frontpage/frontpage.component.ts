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
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  searchTerm:string;

  sortingMethods = Article.sortingMethods;
  getTimeStamp = Article.getTimeStamp;

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToDetailPage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }

  beginUpdatingArticle(articleToUpdate) {
    this.articleService.updateArticle(articleToUpdate);
  }

  beginDeletingArticle(articleToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.articleService.deleteArticle(articleToDelete);
    }
  }
}
