import {Pipe, PipeTransform} from '@angular/core';
import { Article } from './article.model';

@Pipe({
  name:'search',
  pure:false
})

export class SearchPipe implements PipeTransform {
  transform(input:any[], searchString:string) {
    if (!input || !searchString || searchString === '') {
      return input;
    }

    let searchKeys = ["title", "byline"];

    let output = [];
    let searchTerms = searchString.split(searchString);

    for (var index = 0; index < input.length; index++) {
      let article = input[index];
      let added = false;
      for (var termIndex = 0; termIndex < searchTerms.length; termIndex ++) {
        let searchTerm = searchTerms[termIndex];
        for (var keyIndex; keyIndex < searchKeys.length; keyIndex ++) {
          let key = searchKeys[keyIndex];
          if (article.data[key].indexOf(searchTerm)) {
            output.push(article);
            added = true;
          }
        }
      }
    }
    return output;
  }
}
