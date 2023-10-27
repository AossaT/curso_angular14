import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface AlumnoInterface  {
  id:number,
  nombre:string,
  antiguedad:string,
  beca:number

}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  /*
  alumnos=[
    {"id":3, "nombre":"Alumno 1 con id 3 " , "antiguedad":"15/10/2023", "beca":1263.25},
    {"id":22, "nombre":"Alumno 2 con id 22 " , "antiguedad":"08/03/2022", "beca":0},
    {"id":45, "nombre":"Alumno 3 id 45" , "antiguedad":"08/03/1967", "beca":0}
  ];
  */
  alumnos:AlumnoInterface[]=[];
  msgStatus:string = "";

  constructor(private oCli:HttpClient) { 
    this.loadAlumnos();
  }

   
  loadAlumnos(){
    this.oCli.get("http://localhost:3000/alumnos")
    .subscribe({
      next:(data:any)=>{ this.msgStatus ='+OK' ; this.alumnos = data },
      error:(err) => { this.msgStatus = '-ERR '+err.message  }
    })
  }

  getAlumno(id:number):AlumnoInterface{

    console.log("que en alumnos", this.alumnos)

    let nPos = this.alumnos.findIndex((e)=>e.id == id);
    return this.alumnos[nPos];
  }


  updAlumno(id:number,reg:any ){
    let myHeaders=  {
      "Accept": "application/json, text/plain",
      "Content-Type": "application/json;charset=utf-8"
    }
  
    console.log("payload ",JSON.stringify(reg))
    
    this.oCli.put(  "http://localhost:3000/alumnos/"+id.toString(),
                    JSON.stringify(reg),
                    {headers:myHeaders}
  
                    )
    .subscribe({
      next:(data:any)=>{ 
        this.msgStatus ='+OK' ; 
        this.loadAlumnos();
        console.log("update",data) ;
  
        },
      error:(err) => { this.msgStatus = '-ERR '+err.message  }
  })
  }
   

  

}
