import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductI } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(orderBy: string = 'desc', bandFeatured: boolean = false) {
    return this.http.get<ProductI[]>('/assets/data/products.json')
                    .pipe(
                      map(
                        data => {
                          let listData: ProductI[];
                          if ( bandFeatured ) {
                            listData = data.reduce(
                              (prev, curr: ProductI) => {
                                if (curr.type === 1) {
                                  prev.push(curr)
                                }
                                return prev
                              }, 
                              []
                            )
                          } else {
                            listData = data;
                          }
                          if ( orderBy === 'desc') {
                            return listData.sort((a,b) => b.date - a.date );
                          } else {
                            return listData.sort((a,b) => a.date - b.date );
                          }
                        }
                      )
                    )
  }

  getProduct(id: string) {
    return this.http.get<ProductI[]>('/assets/data/products.json')
    .pipe(
      map(
        data => {
          const item = data.find( i => i.code === id);
          if( item ) {
            return item;
          }
        }
      )
    )
  }


}
