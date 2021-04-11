import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductService } from 'src/app/services/product.service';
import { CategoriesService } from '../../services/categories.service';

import { CategoryI, ProductI } from '../../interfaces/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  @Input() gender: string = "";
  @Input() bandAccesories: boolean = false;
  public showCalifications: boolean = true;
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
    private categoryService: CategoriesService,
    private spinner: NgxSpinnerService
  ) { 
  }
  
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(orderBy: boolean = false, featured: boolean = false) {
    this.spinner.show();
    let order: string = orderBy ? 'asc' : 'desc';
    let bandFeatured: boolean = featured ? true : false;
    this.productService.getProducts(order, bandFeatured).subscribe(
      data => {
        let resp;
        setTimeout(() => {
          // Validate if the products to load are male or female collection
          if ( this.gender !==  '') {
            if ( this.gender === 'women') {
              resp = data.filter( p => p.clasification === 1 );
              this.showCalifications = false;
            } else {
              resp = data.filter( p => p.clasification === 2 );
              this.showCalifications = false;
            } console.log(resp)
            if (resp.length > 0) {
              this.spinner.hide();
              this.products = resp;
              this.productsTem = resp;
              return;
            }
          }
          // Validate if the products to load come from the products page or the accessories page
          resp = data.filter( p => p.accesory === this.bandAccesories );
          if (resp.length > 0) {
            this.spinner.hide();
            this.products = resp;
            this.productsTem = resp;
          }
        }, 1000);
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe( resp => {
      this.categories = resp;
    })
  }
  onFilterClasifications(value: number) {
    this.spinner.show();
    setTimeout(() => {
      if (value === 4){
        this.productsTem = this.products;
        return;
      }
      const filter = this.products.filter( element => element.clasification === value );
      this.spinner.hide();
      this.productsTem = filter;
    }, 600);
  }

  onSelectCategory( id: number ) {
    this.changeFilterSize(id);
    this.itemCategory = id;
    this.spinner.show();
    setTimeout(() => {
      if (id === 6){
        this.spinner.hide();
        this.productsTem = this.products;
        return;
      }
      const filter = this.products.filter( element => element.category === this.itemCategory );
      this.spinner.hide();
      this.productsTem = filter;
    }, 600);
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
    this.spinner.show();
    setTimeout(() => {
      if ( listFilter.length === 0 ) {
        this.spinner.hide();
        this.productsTem = [];
        return;
      }
      this.spinner.hide();
      this.productsTem = listFilter;
    }, 600);
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
    this.spinner.show();
    setTimeout(() => {
      if ( listFilter.length === 0 ) {
        this.spinner.hide();
        this.productsTem = [];
        return;
      }
      this.spinner.hide();
      this.productsTem = listFilter;
    }, 600);
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
    this.spinner.show();
    setTimeout(() => {
      if ( listFilter.length === 0 ) {
        this.spinner.hide();
        this.productsTem = [];
        return;
      }
      this.spinner.hide();
      this.productsTem = listFilter;
    }, 600);
  }

}
