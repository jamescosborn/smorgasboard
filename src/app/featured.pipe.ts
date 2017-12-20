import {Pipe, PipeTransform} from '@angular/core';
import { Article } from './article.model';

@Pipe({
	name: "filter",
 	pure: false
})

export class FeaturePipe implements PipeTransform {
	transform(input: any[]){
    let output = []

    for (var i = input.length; i >= 0 || output.length < 3; i--) {
      output.push(input[i])
    }
		return output;
	}
}
