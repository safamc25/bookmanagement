import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

 
  transform(value: any[], sortOrder: string): any[] {
    if (!value || !value.length) {
      return [];
    }

    if (sortOrder === 'lowToHigh') {
      return value.slice().sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      return value.slice().sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'removeFilter') {
      return value.slice(); // Return a copy of the original array without sorting
    } else {
      // No sorting or unknown sorting order
      return value.slice();
    
      
    }
  }
}



