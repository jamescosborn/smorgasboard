import { ArticleService } from './article.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Article  {

  static dataTypes: Object = {
    ['head']: {input: 'Title', type: 'string'},
    ['byline']: {input: 'Byline', type: 'string'},
    ['avatar']: {input: 'Avatar (URL)', type: 'string'},
    ['summary']: {input: 'Summary', type: 'textarea'},
    ['body']: {input: 'Body', type: 'textarea'},
    ['image']: {input: 'Image (URL)', type: 'string'},
    ['tags']: {input: 'Tags (separate by comma)', type: 'string'},
    ['featured']: {input: 'Featured', type: 'bool'}
  }

  id: number;
  data: any;
  constructor(data) {
    this.data = data;
  }

  save(service) {
    service.addArticle(this)
  }

  timeStamp() {
    let now = new Date()
    this.data.date = now.toDateString();
  }

  convertTags() {
    if (!this.data.tags) {
      return false;
    }
    while (this.data.tags.indexOf(', ') != -1) {
      this.data.tags = this.data.tags.replace(", ", ",");
    }
    this.data.tags = this.data.tags.split(",");
    return true;
  }
}
