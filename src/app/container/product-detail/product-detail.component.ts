import { Component, OnInit, ViewChild ,Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() productListComp:ProductListComponent = undefined;
  product:Product 

  @Output()
  closeModal = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.product = this.productListComp.selectedProduct
  }
  onClose(){
    this.closeModal.emit()
  }
  
}
