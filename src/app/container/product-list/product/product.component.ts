import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product:Product;
  
  @Output()
  prodcutClicked = new EventEmitter<Product>()


  clickProduct(): void {
    this.prodcutClicked.emit(this.product)
  }
  constructor() { }

  ngOnInit(): void { }

}
