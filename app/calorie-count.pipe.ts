import {Pipe, PipeTransform} from 'angular2/core';
import {Entry} from './entry.model';

@Pipe({
  name: "calorieCount",
  pure: false
})
export class CalorieCountPipe implements PipeTransform {
  transform(input: Entry[], args) {
    var pipeFilter = args[0];
    var output: Entry[] = [];

    switch(pipeFilter) {
      case "<500":
        for(let entry of input) {
          if (Number(entry.calories) < 500) {
            output.push(entry);
          }
        }
        break;

      case ">=500":
        for(let entry of input) {
          if (Number(entry.calories) >= 500) {
            output.push(entry);
          }
        }
        break;

      case "All":
        output = input;
    }
    return output;
  }
}
