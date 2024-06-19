import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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

}
