import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous',
  standalone: true
})
export class MarvellousPipe implements PipeTransform {

  transform(value: string): string
  {
    if (!value) {
      return '';
 }

 return value.split('').reverse().join(''); 
 }

}
