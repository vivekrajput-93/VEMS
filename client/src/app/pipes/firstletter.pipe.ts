import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstletter',
  standalone: true
})
export class FirstletterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase()) 
      .join(''); 
  }
}



