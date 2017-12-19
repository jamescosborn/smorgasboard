import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles() {
    // return this.articles;
    return [
      new Article({
        head: 'Fallout 4 VR sucks',
        byline: 'disgruntled VR player',
        avatar: 'https://t3.ftcdn.net/jpg/01/57/57/00/240_F_157570061_qpDot58IsaQPIf6IpZHmpjPRyfAAyRDe.jpg',
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        image: '/src/resources/img/placeholder2.png'
      }),
      new Article({
        head: 'Stepson, S/T, LP, 1974, Portland, Oregon, U.S.A.',
        byline: 'Plate-O-Shrimp',
        avatar: 'https://avatars2.githubusercontent.com/u/31573575?s=400&v=4',
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        image: 'http://4.bp.blogspot.com/-2OqPDFGK5n0/VgLheujH1DI/AAAAAAAAASE/CNKym4rpMXY/s1600/IMG_20150923_100713946.jpg',
        link: 'http://plateohshrimp.blogspot.com/2015/09/stepson-st-lp-1974-portland-oregon-usa.html'
      }),
    ]
  }

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
  }

  getArticleById(articleId: string) {
    return this.database.object('articles/' + articleId);
  }

  updateArticle(localUpdatedArticle) {
    const articleEntryInFirebase = this.getArticleById(localUpdatedArticle.$key);
    articleEntryInFirebase.update({
      data: localUpdatedArticle.data
    });
  }

  deleteArticle(localArticleToDelete) {
    const articleEntryInFirebase = this.getArticleById(localArticleToDelete.$key);
    articleEntryInFirebase.remove();
  }

}
