//
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Mifondo]'
})
export class MifondoDirective {

  constructor(private elementRef:ElementRef) {
      elementRef.nativeElement.style.background = 'red';
   }

}
