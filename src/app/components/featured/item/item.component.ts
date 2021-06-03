import { Component, Input } from '@angular/core';
import { ProductI } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [`
    .img {
      height: 260px;
    }

    .product {
        cursor: pointer;
    }
  `],
})
export class ItemComponent {

  @Input() product: ProductI;
  constructor(
    private router: Router
  ) { }

  openProduct() {
    this.router.navigateByUrl(`/product/${ this.product.code }`)
  }

}
