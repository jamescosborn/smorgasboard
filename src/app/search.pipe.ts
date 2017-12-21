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
    console.log(ARTICLES);
    if(ARTICLES && searchTerm){

    ARTICLES.forEach((ARTICLE)=>{
      this.terms = searchTerm.split(this.delimiter);
      ARTICLES.forEach((x,xIndex)=>{
        if( searchTerm.indexOf(x.data.head)>=0   || searchTerm.indexOf(x.data.byLine)>=0  ){
          this.results.push(x);
        } else {
          x.data.tags.forEach((artTag)=>{
            this.terms.forEach((usrTag)=>{
                if(artTag==usrTag) {
                  this.results.push(x);
                }
            });
          });
        }
      });
    });
    return this.results;
  }
  }
}
