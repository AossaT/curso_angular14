import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nivel3';

  valor = 0 ;
  lTimer = false;
  constructor(){
    interval(1000).subscribe(x=>{
      if(this.lTimer){
        this.valor++
      }
    })
  }

  arranca(){
    this.lTimer = true;
    console.log("arranca")
  }
  para(){
    this.lTimer = false;
    console.log("para")

  }

}
