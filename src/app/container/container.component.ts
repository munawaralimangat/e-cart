import { ContentChild,Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
 

  ngOnInit(): void {
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

  closeModal(){
    this.productListComponent.selectedProduct = null
  }

}
