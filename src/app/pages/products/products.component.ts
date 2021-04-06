import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public pageActual: number = 1;
  public productsTem: ProductI[] = [];
  public products: ProductI[] = [];
  public textSearch: string = '';
  
  constructor(
    private productService: ProductService
  ) { 
  }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(orderBy: boolean = false, featured: boolean = false) {
    let order: string = orderBy ? 'asc' : 'desc';
    let bandFeatured: boolean = featured ? true : false;
    this.productService.getProduct(order, bandFeatured).subscribe(
      data => {
          this.products = data;
          this.productsTem = data;
    });
  }

  onFilterCategory(value: number) {
    if (value === 4){
      this.productsTem = this.products;
      return;
    }
    const filter = this.products.filter( element => element.category === value );
    this.productsTem = filter;
  }

  onSearch(text: string) {
    this.textSearch = text;
  }

}
