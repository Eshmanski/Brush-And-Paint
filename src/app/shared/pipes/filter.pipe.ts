import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: Array<any>, page: number, countEl: number): Array<any> {
    const start: number = (page-1) * countEl;
    const end: number = start + countEl;
    let newArr = arr.slice(start, end);
    return newArr;
  }
}
