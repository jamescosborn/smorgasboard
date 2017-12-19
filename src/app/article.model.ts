import { ArticleService } from './article.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Article  {
  id: number;
  data: object;
  constructor(data) {
    this.data = data;
  }
}
