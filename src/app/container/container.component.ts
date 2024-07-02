import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductComponent } from './product-list/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  addToCart:number = 0
  product = {
    name:'IPhone 15',
    price:699,
    color:'matte black',
    discountedPrice:50,
    imageUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg',
    inStock:10
  }
  getDiscount(){
    return this.product.price - this.product.discountedPrice
  }
  ngOnInit(): void {
  }

  increment(){
    if(this.addToCart < this.product.inStock)
    this.addToCart++
  }

  decrement(){
    if(this.addToCart > 0){
      this.addToCart--
    }
  }
  searchText:string = ''

  @ViewChild(ProductListComponent) productListComponent:ProductListComponent

  setSearchText(value:string){
    this.searchText = value
  }

}
