import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  product = {
    name:'IPhone 15',
    price:699,
    color:'matte black',
    discountedPrice:50,
    imageUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg',
    inStock:0
  }
  getDiscount(){
    return this.product.price - this.product.discountedPrice
  }
  ngOnInit(): void {
  }

  clicked(){
    console.log('clicked')
  }

}
