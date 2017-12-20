import {Pipe, PipeTransform} from '@angular/core';
import { Article } from './article.model';

@Pipe({
	name: "featured",
 	pure: false
})

export class FeaturePipe implements PipeTransform {
	transform(input: any[]){
		if (!input || !input) {
			return input;
		}
    let output = []



    for (var i = input.length-1; i >= 0 && output.length < 3; i-=1) {
			let article = input[i]
			if (article && article.data && article.data.featured) {
				output.push(article)
			}
    }
		return output;
	}
}
