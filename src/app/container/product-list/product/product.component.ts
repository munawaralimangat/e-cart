import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product:{
    id:number,
    name:string,
    description:string,
    price:number,
    gender:string,
    brand:string,
    category:string,
    sizes:string[],
    colors:string[],
    isAvailable:boolean,
    itemsLeft:number,
    discount?:number,
    slug:string,
    imageUrl:string
  }
  constructor() { }

  ngOnInit(): void {
  }

}
