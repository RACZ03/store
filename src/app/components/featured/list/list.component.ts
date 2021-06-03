import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  template: `
    <!--===== FEATURED PRODUCTS =====-->
    <section class="featured section" id="featured">
        <h2 class="section-title"> PRODUCTOS DESTACADOS </h2>
        <!-- <a routerLink="['/featured']" class="section-all" >Ver todos</a> -->

        <div class="mx-5">
            
            <!-- IMPORT ITEMS -->
            <div class="row">

                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"
                        *ngFor=" let product of products |
                                    paginate: { itemsPerPage: 8, currentPage: pageActual }; let i = index">

                    <app-item [product]="product"></app-item>

                </div>

            </div>
        </div>
            
    </section>
  `
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
        for (let i = 0; i < data.length; i++) {
          if (data[i].type === 1 && i < 8) {
            this.products.push(data[i]);
          }
        }
    });
  }

}
