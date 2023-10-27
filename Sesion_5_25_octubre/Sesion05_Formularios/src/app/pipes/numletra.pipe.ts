import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numletra'
})
export class NumletraPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 1: return "uno";
      case 2: return "dos";
      default:
        return "No se que numero has puesto"
    }
    
  }

}
