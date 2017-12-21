import {Pipe, PipeTransform} from '@angular/core';
import { Article } from './article.model';

@Pipe({
  name:'search',
  pure:false
})

export class SearchPipe implements PipeTransform {
  delimiter:string = ",";
  skipTerms:string[];
  results:any[]=[];
  terms:string[];

  transform(ARTICLES:any[],searchTerm:string) {
    return ARTICLES;
  }
}
