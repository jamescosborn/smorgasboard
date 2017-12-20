import { ArticleService } from './article.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Article  {

  static dataTypes: Object = {
    ['head']: {input: 'Title', type: 'string'},
    ['byline']: {input: 'Byline', type: 'string'},
    ['avatar']: {input: 'Avatar (URL)', type: 'string'},
    ['body']: {input: 'Body', type: 'textarea'},
    ['image']: {input: 'Image (URL)', type: 'string'},
    ['tags']: {input: 'Tags (separate by comma)', type: 'string'},
    ['featured']: {input: 'Featured', type: 'bool'}
  }

  id: number;
  data: object;
  constructor(data) {
    this.data = data;
  }
}
