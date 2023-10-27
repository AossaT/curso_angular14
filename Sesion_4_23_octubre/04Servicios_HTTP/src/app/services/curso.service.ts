import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';


export interface AlumnoInterface {
  "id":number,
  "nombre":string
}


export interface AssetInteface {
  "cursos":string[],
  "alumnos":AlumnoInterface[]
} 


@Injectable({
  providedIn: 'root'
})
export class CursoService  {
  Memalumnos = [
    {"id":1, "nombre":"Alberto Sacristan Garrido"},
    {"id":2,"nombre":"Angelo Ossa Talaga"},
    {"id":3,"nombre":"Benjamin  Lucas Moreno"},
    {"id":4,"nombre":"Carles Español Mercade"},
    {"id":5,"nombre":"Carlos Daniel Mercado Santana"},
    {"id":6,"nombre":"David Gato Vaquero"},
    {"id":7,"nombre":"Eduardo  Carrillo Moreno"},
    {"id":8,"nombre":"Elena Cerro Del Pino"},
    {"id":9,"nombre":"Fernando Molina Najera"},
    {"id":10,"nombre":"Francisco Carlos  Perea Mora"},
    {"id":11,"nombre":"Freddy Junior Leyva Flores"},
    {"id":12,"nombre":"Luis Ruben  De Ory Lopez"},
    {"id":13,"nombre":"Manuel  Villen Sanchez"},
    {"id":14,"nombre":"Maria Pilar Castro Sanchez"},
    {"id":15,"nombre":"Maria Salamanca Figueroa"},
    {"id":16,"nombre":"Mikel Cañamares Edo"},
    {"id":17,"nombre":"Nestor Rodriguez Garzon"},
    {"id":18,"nombre":"Roberto Carlos Lopez Raya"},
    {"id":19,"nombre":"Rodolfo Rodriguez Rodriguez"},
    {"id":20,"nombre":"Rodrigo Valencia Alvaro"},
    {"id":21,"nombre":"Ruben Martinez Garcia"}
  ]; 

 // alumnos:AlumnoInterface[] = [];
  

  constructor(public clientHttp: HttpClient) { 
/*    
    clientHttp.get<AssetInteface>('/assets/config.json').subscribe ( x =>{
      this.alumnos = x.alumnos
    })
  */  

  /*
    clientHttp.get<AlumnoInteface[]>('http://localhost:3000/alumnos').subscribe ( x =>{
      this.alumnos = x;
    } , err => { 
      alert("error "+ err.message)
      console.log("hay error", err )
    })
    */
   /*
    this.clientHttp.get<AlumnoInterface[]>('http://localhost:3000/alumnos')
    .subscribe({
      next:( e:AlumnoInterface[] )=>{ 
        this.alumnos = e;
        console.log("tengo alumnos", e)
      },
      error: (e)=> console.log("error", e)
    });
    */

 
  }


  version():string{
    return "Curso Service V: 0.0.0";
  }

 /*
  updAlumno(index:number,nombre:string){
    this.Memalumnos![index].nombre = nombre;
  }
  */

  updAlumno(index:number,nombre:string){
    // this.Memalumnos![index].nombre = nombre;
    return this.clientHttp.get<AssetInteface>('/assets/config.json')

  }

  getAlumnosinMemory(){
   return this.Memalumnos;
  }

  getAlumnosinAssets(){
    return this.clientHttp.get<AssetInteface>('/assets/config.json')
  }

  getAlumnosinSubscribe(){
    return  this.clientHttp.get("http://localhost:3000/alumnos");
  }
  

  async getAlumnosinPromise(){
    return  await this.clientHttp.get("http://localhost:3000/alumnos").toPromise();
  }


  getPlaintext(cb:any) {
     this.clientHttp.get(`http://localhost:3000/notas.txt`, { responseType: 'text' }).subscribe({
        next: (data)=> cb(data),
        error: (e)=> console.log("error", e)  
    });
  }



  
  



}
