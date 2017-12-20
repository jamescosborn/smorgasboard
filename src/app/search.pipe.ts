// import {Pipe, PipeTransform} from '@angular/core';
// import { Article } from './article.model';
//
// @Pipe({
//   name:'search',
//   pure:false
// })
// export class SearchPipe implements PipeTransform {
//   delimiter:string = ",";
//   skipTerms:string[];
//   results:Article[]=[];
//   terms:string[];
//
//   transform(ARTICLES:Article[],searchTerm:string) {
//     terms = searchTerm.split(this.delimiter);
//   loop1:
//     ARTICLES.forEach((x,xIndex)=>{
//       if( searchTerm.indexOf(x.head)>=0   ||
//           searchTerm.indexOf(x.byLine)>=0  )
//       {
//         results.push(article);
//         continue loop1;
//       }
//       loop2:
//       article.tags.forEach((artTag)=>{
//         loop3:
//         terms.forEach((usrTag)=>{
//             if(artTag==usrTag)
//             {
//               results.push(article);
//               break loop2;
//             }
//         });
//       });
//     });
//   }
// }
