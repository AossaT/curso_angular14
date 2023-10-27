import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dalumno',
  templateUrl: './dalumno.component.html',
  styleUrls: ['./dalumno.component.css']
})
export class DalumnoComponent implements OnInit {
  id = 0 ;
  //constructor() { }
  constructor(private route: ActivatedRoute) {
    console.log("route",route.snapshot.params)
    this.id = route.snapshot.params['id'];
    //console.log(route.snapshot.params['id'])
  }


  ngOnInit(): void {
  }

}
