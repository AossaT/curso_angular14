import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {
  @Input() valor = 0 ;
  @Output() msgPadre: EventEmitter<string> = new EventEmitter();


  constructor() { 
    interval(1000).subscribe(x=>{
      //if(this.lTimer){
      //  this.valor--
     // }
     if(this.valor < 0 ){
      this.msgPadre.emit("Contador ha llegado a 0 ")
     }
    })
  }

  ngOnInit(): void {
  }

}
