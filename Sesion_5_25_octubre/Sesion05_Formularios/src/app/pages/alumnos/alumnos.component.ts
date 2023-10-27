import { Component, OnInit } from '@angular/core';

import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  constructor(public oServicio:CursoService) { }

  ngOnInit(): void {
  
  }

}
