import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';
import { CategoryI } from '../../interfaces/interfaces';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public categories: CategoryI[] = [];
  public pageActual: number = 1;
  public productsTem: ProductI[] = [];
  public products: ProductI[] = [];
  public textSearch: string = '';

  public itemCategory: number = 6;
  public bandFilterR: boolean = false;
  public bandFilterP: boolean = false;
  public bandFilterZ: boolean = false;
  
  constructor(
    private productService: ProductService,
    private categoryService: CategoriesService
  ) { 
  }
  
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(orderBy: boolean = false, featured: boolean = false) {
    let order: string = orderBy ? 'asc' : 'desc';
    let bandFeatured: boolean = featured ? true : false;
    this.productService.getProducts(order, bandFeatured).subscribe(
      data => {
          this.products = data;
          this.productsTem = data;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe( resp => {
      this.categories = resp;
    })
  }
  onFilterCategory(value: number) {
    if (value === 4){
      this.productsTem = this.products;
      return;
    }
    const filter = this.products.filter( element => element.clasification === value );
    this.productsTem = filter;
  }

  onSelectCategory( id: number ) {
    this.changeFilterSize(id);
    this.itemCategory = id;
    if (id === 6){
      this.productsTem = this.products;
      return;
    }
    const filter = this.products.filter( element => element.category === this.itemCategory );
    this.productsTem = filter;
  }

  changeFilterSize(id: number) {
    if ( id === 1 || id === 2 ) {
      this.bandFilterR = true; this.bandFilterP = false; this.bandFilterZ = false;
    } else if ( id === 3 || id === 4 ) {
      this.bandFilterR = false; this.bandFilterP = true; this.bandFilterZ = false;
    } else if ( id === 5 ) {
      this.bandFilterR = false; this.bandFilterP = false; this.bandFilterZ = true;
    } else {
      this.bandFilterR = false; this.bandFilterP = false; this.bandFilterZ = false;
    }
  }

  onSearch(text: string) {
    this.textSearch = text;
  }

}
