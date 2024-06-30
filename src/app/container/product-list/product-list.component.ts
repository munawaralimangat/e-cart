import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'A high-performance laptop suitable for all your computing needs.',
      price: 999.99,
      gender: 'Unisex',
      brand: 'TechBrand',
      category: 'Electronics',
      sizes: ['N/A'],
      colors: ['Silver'],
      isAvailable: true,
      itemsLeft: 10,
      discount:21,
      slug: 'laptop',
      imageUrl: 'https://m.media-amazon.com/images/I/71DozMyPCBL._SX679_.jpg'
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'A sleek smartphone with the latest features and a stunning display.',
      price: 699.99,
      gender: 'Unisex',
      brand: 'PhoneBrand',
      category: 'Electronics',
      sizes: ['N/A'],
      colors: ['Black', 'White'],
      isAvailable: true,
      itemsLeft: 5,
      discount:18,
      slug: 'smartphone',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzycins-539573502'
    },
    {
      id: 3,
      name: 'Running Shoes',
      description: 'Comfortable and durable running shoes for your daily exercise routine.',
      price: 79.99,
      gender: 'Unisex',
      brand: 'SportBrand',
      category: 'Sports',
      sizes: ['8', '9', '10', '11'],
      colors: ['Red', 'Blue'],
      isAvailable: false,
      itemsLeft: 0,
      discount:14,
      slug: 'running-shoes',
      imageUrl: 'https://www.campusshoes.com/cdn/shop/products/RUNNER_6G-319_M.BLU-PISTA_2_720x.jpg?v=1670326271'
    },
    {
      id: 4,
      name: 'Wrist Watch',
      description: 'A stylish wrist watch that combines elegance with functionality.',
      price: 149.99,
      gender: 'Unisex',
      brand: 'WatchBrand',
      category: 'Accessories',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver'],
      isAvailable: true,
      itemsLeft: 3,
      discount:0,
      slug: 'wrist-watch',
      imageUrl: 'https://in.danielwellington.com/cdn/shop/products/dbd5e5b6734dd6a902ba1b0fae4a7a3f79b62a9c.png?v=1679929589'
    },
    {
      id: 5,
      name: 'Coffee Maker',
      description: 'Brew the perfect cup of coffee every morning with this easy-to-use coffee maker.',
      price: 49.99,
      gender: 'Unisex',
      brand: 'HomeBrand',
      category: 'Home Appliances',
      sizes: ['N/A'],
      colors: ['White', 'Black'],
      isAvailable: true,
      itemsLeft: 8,
      discount:10,
      slug: 'coffee-maker',
      imageUrl: 'https://glenindia.com/cdn/shop/products/1_59f04f79-cb58-4b08-9547-07702fcc49a1_773x773.jpg?v=1672308229'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

  totalProductsCount = this.products.length;
  totalProductsInStock = this.products.filter(p => p.isAvailable).length;
  totalProductsOutOfStock = this.products.filter( p => !p.isAvailable).length;
  
  selectedRadioButton:string = 'all'

  onFilterChange(value:string){
    this.selectedRadioButton = value
  }
}
