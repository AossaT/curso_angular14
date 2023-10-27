import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nivel5';
  msg = "respuesta";

  reciboHijo(message:string){
    this.msg= message;
    
  }
}
