import {Pipe, PipeTransform} from '@angular/core';
import { Article } from './article.model';

@Pipe({
	name: "sorting",
 	pure: false
})

export class SortingPipe implements PipeTransform {
	transform(input: any[], sorterId: number = 0){
		let sorter = Article.sortingMethods[sorterId];
		if (!input || !sorter) {
			return input;
		}
		return sorter.method(input);
	}
}
