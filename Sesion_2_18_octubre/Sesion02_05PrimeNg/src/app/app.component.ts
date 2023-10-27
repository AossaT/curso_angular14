import { Component , OnInit , OnChanges, DoCheck} from '@angular/core';

interface ProductInterface{
  code:string,
  name:string,
  category:string,
  quantity:number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , DoCheck {
  title = 'primeng';
  products: ProductInterface[] =[
    {code:"c1", name:"producto 1", category:"categoria1", quantity:10 },
    {code:"c2", name:"producto 2", category:"categoria1", quantity:12 },
    {code:"c3", name:"producto 3", category:"categoria2", quantity:14 },
    
  ];
  ngOnInit(){
    console.log("inic")
  }
  ngDoCheck(){
    console.log("do check")

  }


  actualiza(){
    this.products.forEach((e)=>{
      e.quantity++
    })
  }
}
