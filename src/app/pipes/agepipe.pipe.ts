import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipe'
})
export class AgepipePipe implements PipeTransform {

  transform(value : Date): number{
     let currentYear : number = new Date().getFullYear();
     let valueYear : number = new Date(value).getFullYear();
     let age :number = currentYear - valueYear;

    return age;
  }

}
