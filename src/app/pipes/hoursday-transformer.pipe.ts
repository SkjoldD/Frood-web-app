import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursdayTransformer'
})
export class HoursdayTransformerPipe implements PipeTransform {

  transform(value: string): string {

    let result = Number(value);
    let resultStr = String(value) + " t."
    if (result > 23.9){
      result = result / 24;
      resultStr = String(result) + " d."
    }

    return resultStr;
  }

}
