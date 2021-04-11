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

  @Input() bandAccesories: boolean = false;
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
        const resp = data.filter( p => p.accesory === this.bandAccesories );
        if (resp.length > 0) {
          this.products = resp;
          this.productsTem = resp;
        }
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

  onFilterSizeR(e) {
    let listFilter: ProductI[] = [];
    this.products.forEach( p => {
      if ( p.sizer === undefined) {
        return;
      }
      const item = p.sizer.filter(size => size === e);
      if ( item.length > 0 ) {
        listFilter.push( p );
      }
    });
    if ( listFilter.length === 0 ) {
      this.productsTem = [];
    }
    this.productsTem = listFilter;
  }

  onFilterSizeP(e) {
    let listFilter: ProductI[] = [];
    this.products.forEach( p => {
      if ( p.sizep === undefined) {
        return;
      }
      const item = p.sizep.filter(size => size === e);
      if ( item.length > 0 ) {
        listFilter.push( p );
      }
    });
    if ( listFilter.length === 0 ) {
      this.productsTem = [];
    }
    this.productsTem = listFilter;
  }

  onFilterSizeZ(e) {
    let listFilter: ProductI[] = [];
    this.products.forEach( p => {
      if ( p.sizez === undefined) {
        return;
      }
      const item = p.sizez.filter(size => size === e);
      if ( item.length > 0 ) {
        listFilter.push( p );
      }

      let value = `${ e.toString() }.5`;
      const item2 = p.sizez.filter(size => size === parseInt(value));
      if ( item2.length > 0 && item[0] !== item2[0] ) {
        listFilter.push( p );
      }
    });
    if ( listFilter.length === 0 ) {
      this.productsTem = [];
    }
    this.productsTem = listFilter;
  }

}
