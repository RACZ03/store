import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: ProductI;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.product)
  }

  openProduct() {
    this.router.navigateByUrl(`/product/${ this.product.code }`)
  }

}
