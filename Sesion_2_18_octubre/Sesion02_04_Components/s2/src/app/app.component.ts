import { Component } from '@angular/core';

interface ContadorInterface {
  id:number,
  title:string,
  inicio:number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sesion2';
  aux:string = '';


  aContadores:ContadorInterface[] = [
    {id:1, title:"Contador 1", inicio: 0  },
    {id:2, title:"Contador 2", inicio: 5  },
    {id:3, title:"Contador 3", inicio: 4  },
  ]

  delElem(id:number){
    var aResto:ContadorInterface[] = this.aContadores.filter(x=>{return x.id !== id });
     this.aContadores = aResto;
  }

  receiveMessage($event:any) {
    console.log("recibo msg hijo", $event)
    this.aux += $event +'\n' ;
    
    // this.message = $event;
  }

}
