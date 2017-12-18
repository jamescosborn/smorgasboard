import { ArticleService } from './article-service'

export class Article  {
  id: number;
  data: object;

  static getAll() {
    return ArticleService.getArticles();
  }

  constructor(data) {
    this.data = data;
  }

  save() {
    this.id = Article.getAll().length;
    ArticleService.addArticle(this);
  }
}
