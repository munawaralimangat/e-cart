export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    gender:string;
    brand:string;
    category:string;
    sizes:string[];
    colors:string[];
    isAvailable:boolean;
    itemsLeft:number;
    discount?:number;
    slug:string;
    imageUrl:string;
}