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
  public colorP: boolean = false;
  public colorW: boolean = false;
  public colorB: boolean = false;
  public colorD: boolean = false;
  public colorS: boolean = false;
  public colorI: boolean = false;
  public colorG: boolean = false;

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
        this.product.colors.forEach( color => {
          if ( color === 'A' ) { this.colorP = true }
          else if ( color === 'W' ) { this.colorW = true }
          else if ( color === 'N' ) { this.colorB = true }
          else if ( color === 'R' ) { this.colorD = true }
          else if ( color === 'V' ) { this.colorS = true }
          else if ( color === 'C' ) { this.colorI = true }
          else if ( color === 'G' ) { this.colorG = true }
        })
      }
    )
  }

  onChangePhoto(file: string) {
    this.photo = file;
  }

}
