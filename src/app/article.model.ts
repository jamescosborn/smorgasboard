import { ArticleService } from './article-service'

export class Article  {
  id: number;
  data: object;

  static getAll() {
    return ArticleService.getArticles();
  }

  static getFeatured() {
    let all = Article.getAll();
    var featured = [];
    all.forEach(function(article) {
      if (article.data.featured && featured.length < 3) {
        featured.push(article)
      }
    });
    return featured;
  }

  constructor(data) {
    this.data = data;
  }

  save() {
    this.id = Article.getAll().length;
    ArticleService.addArticle(this);
  }
}
