import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/interfaces/interfaces';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: ProductI;
  public photo: string = '';

  constructor(
    private productService: ProductService,
    private active: ActivatedRoute
  ) {
    this.active.params.subscribe( param => this.getProduct(param.id) )
  }

  ngOnInit(): void {
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe(
      resp => {
        this.product = resp;
        this.photo = this.product.photo[0];
        console.log(this.product.photo[0])
      }
    )
  }

  onChangePhoto(file: string) {
    this.photo = file;
  }

}
