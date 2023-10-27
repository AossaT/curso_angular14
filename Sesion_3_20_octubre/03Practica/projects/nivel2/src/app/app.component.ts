import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nivel2';
  valor = 0 ;
  constructor(){
    interval(1000).subscribe(x=>this.valor++)
    
    /*
    setInterval(()=>{
      
      this.valor++;
    }, 1000)
    */

   //interval(1000).subscribe(x=>this.valor++)
  }
}
