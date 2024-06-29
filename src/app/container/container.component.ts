import { Component, OnInit } from '@angular/core';

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
    console.log('component mounted')
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
