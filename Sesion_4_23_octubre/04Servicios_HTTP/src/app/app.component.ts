import { Component } from '@angular/core';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04Sesion';
  msg ='' ;
  
  constructor( public servicioCurso:CursoService){}

  updData(){
    this.servicioCurso.updAlumno(3, "Nombre de la posicion 3")
  }

  version(){
    alert("Version"+this.servicioCurso.version())
  }

  
  loadTxt(){
    this.servicioCurso.getPlaintext((txt:any)=>this.msg=txt);
  }
}
