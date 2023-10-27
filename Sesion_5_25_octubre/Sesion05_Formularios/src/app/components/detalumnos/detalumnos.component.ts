import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalumnos',
  templateUrl: './detalumnos.component.html',
  styleUrls: ['./detalumnos.component.scss']
})
export class DetalumnosComponent implements OnInit {
  @Input() id:number = 0 ;
  regAlumno:any = {};

  validPattern = "^[0-9]{0,10}$";

  alumnoForm = new FormGroup({
    nombre: new FormControl('' , [Validators.required]),
    antiguedad: new FormControl(''),
    beca: new FormControl(0 , [ Validators.required,  Validators.pattern(this.validPattern),   Validators.min(10)] ),
  });

 
  constructor( public oServ:CursoService,  public route:ActivatedRoute) {
    
  }

  loadReg(){

    this.regAlumno = this.oServ.getAlumno(this.id);

    this.alumnoForm.setValue( 
      {
        nombre:this.regAlumno.nombre , 
        antiguedad:this.regAlumno.antiguedad, 
        beca:this.regAlumno.beca 
      } 
      )

  }

   
  onSubmit(){
    this.oServ.updAlumno(this.id,this.alumnoForm.value)
    //this.router.navigate(['/alumnos'])
 
    
    
  }

  ngOnInit(): void {

    if( this.route.snapshot.params["id"] ){
      this.id = this.route.snapshot.params["id"];
    }
    
    this.regAlumno = this.oServ.getAlumno(this.id);

    if(this.regAlumno){
      this.loadReg();
    
    }
    
    
  }
}
