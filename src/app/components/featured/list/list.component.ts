import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  public pageActual: number = 1;
  public products: ProductI[] = [];
  
  constructor(
    private productService: ProductService
  ) { 
  }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts('desc', true).subscribe(
      data => {
        for (let i = 0; i < 8; i++) {
          if (data[i].type === 1) {
            this.products.push(data[i]);
          }
        }
    });
  }

}
