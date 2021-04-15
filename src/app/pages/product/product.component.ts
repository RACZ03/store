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
  public colorHellow: boolean = false;
  public colorBlue: boolean = false;
  public colorWhite: boolean = false;
  public colorBrown: boolean = false;
  public colorLightBlue: boolean = false;
  public colorGray: boolean = false;
  public colorPurple: boolean = false;
  public colorOrange: boolean = false;
  public colorBlack: boolean = false;
  public colorPink: boolean = false;
  public colorRed: boolean = false;
  public colorGreen: boolean = false;
  public messageWhat: string = '';
  public numAdmin: string = '+505 86604980';

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
          if ( color === 'HELLOW' ) { this.colorHellow = true }
          else if ( color === 'BLUE' ) { this.colorBlue = true }
          else if ( color === 'WHITE' ) { this.colorWhite = true }
          else if ( color === 'BROWN' ) { this.colorBrown = true }
          else if ( color === 'LIGHTBLUE' ) { this.colorLightBlue = true }
          else if ( color === 'GRAY' ) { this.colorGray = true }
          else if ( color === 'PURPLE' ) { this.colorPurple = true }
          else if ( color === 'ORANGE' ) { this.colorOrange = true }
          else if ( color === 'BLACK' ) { this.colorBlack = true }
          else if ( color === 'PINK' ) { this.colorPink = true }
          else if ( color === 'RED' ) { this.colorRed = true }
          else if ( color === 'GREEN' ) { this.colorGreen = true }
        });

        this.messageWhat = `https://api.whatsapp.com/send?phone= ${ this.numAdmin } 
                            &text=Hola%20estoy%20interesado%20en%20el%20producto:%20${ this.product.name }`;
      }
    )
  }

  onChangePhoto(file: string) {
    this.photo = file;
  }

}
