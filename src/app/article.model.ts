export class Article  {
  id: number;
  data: object;

  static getAll() {
    return []
  }

  constructor(data) {
    this.data = data;
  }
  save() {
    this.id = Article.getAll().length;

  }
}
