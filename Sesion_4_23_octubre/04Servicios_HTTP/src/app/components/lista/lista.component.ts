import { Component, Input, OnInit } from '@angular/core';
import { CursoService , AlumnoInterface } from 'src/app/services/curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit  {
  @Input() lMay:boolean = false ; 

  MsgError:string = '';
  myAlumnos:AlumnoInterface[] = [];
  
  constructor( private servicioCurso:CursoService) { }

  ngOnInit(): void {
     this.myAlumnos = this.servicioCurso.getAlumnosinMemory();

    /*
    this.servicioCurso.getAlumnosinAssets().subscribe({
      next:(data) =>{this.myAlumnos = data.alumnos },
      error: (e)=> { this.MsgError = e.message }
    });
    */
    

    
  /*
    // Carga para modo HTTP
    this.servicioCurso.getAlumnosinSubscribe().subscribe({
      next:(data) =>{this.myAlumnos = data as AlumnoInterface[]},
      error: (e)=> { this.MsgError = e.message }
    });
    */
    


    
  }

  async loadSync(){
    let kk = await this.servicioCurso.getAlumnosinPromise();
    console.log("hola", kk);
    this.myAlumnos = kk as AlumnoInterface[];
  }


}
