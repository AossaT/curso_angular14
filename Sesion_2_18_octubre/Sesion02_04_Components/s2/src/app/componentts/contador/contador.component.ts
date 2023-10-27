import { Component, Input, Output, OnChanges, OnInit, OnDestroy,   SimpleChanges, EventEmitter } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';


const unseg:Observable<number> = interval(1000);

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit, OnDestroy, OnChanges {
  @Input() id:number = 0;
  @Input() valor:number = 0;
  @Input() parentMessage:string = '';

  @Output() messageEvent = new EventEmitter<string>();

  obs?: Subscription;
  
  constructor() { 
    this.obs =  unseg.subscribe(x=>{
      console.log("temporizador un seg", x)
      this.valor++;
      this.messageEvent.emit(`Papa: soy ${this.id} con el valor ${this.valor} ` );
    })
  }



  ngOnInit(): void {
    console.log("init elemento")
  }
  ngOnDestroy() {
    console.log("destruyo elemento")
    this.obs?.unsubscribe();
  }
    
  ngOnChanges(changes: SimpleChanges) {
    console.log("cammbios ", changes)
  }

  ngDoCheck(){
    //console.log("do check")
  }




}

/*
import { Component, Input, OnChanges, OnInit, OnDestroy,   SimpleChanges } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit , OnChanges , OnDestroy{
  @Input() titulo:string = "Contador 0.0.0";
  
  valor:number = 0 ; 
  unseg:Observable<number> = interval(1000);
  obs?: Subscription;
 
  constructor() { 

  }

  ngOnInit(): void {
    this.obs =  this.unseg.subscribe(x=>{this.valor++})
  }

  
  ngOnChanges(changes: SimpleChanges) {
    console.log("camiobs ", changes)
    // changes.prop contains the old and the new value...
  }
  
  ngOnDestroy() {
    this.obs?.unsubscribe();
  }

  ngDoCheck(){
    interval
    console.log("do check")

  }
  

}

*/