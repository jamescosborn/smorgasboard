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

    let searchKeys = ["head", "byline"];

    let output = [];
    let searchTerms = searchString.split(" ");

    for (var index = 0; index < input.length; index++) {
      let article = input[index];
      let added = false;
      for (var termIndex = 0; termIndex < searchTerms.length && !added; termIndex ++) {
        let searchTerm = searchTerms[termIndex].toLowerCase();
        if (searchTerm == " " || searchTerm == "") {
          continue;
        }
        console.log("searchTerm = " + searchTerm)
        for (var keyIndex = 0; keyIndex < searchKeys.length && !added; keyIndex ++) {
          let key = searchKeys[keyIndex];
          if (article.data[key] && article.data[key].toLowerCase().indexOf(searchTerm) !== -1) {
            output.push(article);
            added = true;
          }
        }
      }
    }
    return output;
  }
}
