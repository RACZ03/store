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

  getProduct(orderBy: string = 'desc', bandFeatured: boolean = false) {
    return this.http.get<ProductI[]>('/assets/data/products.json')
                    .pipe(
                      map(
                        data => {
                          let listData: ProductI[];
                          console.log(bandFeatured)
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
                          console.log(listData)
                          if ( orderBy === 'desc') {
                            return listData.sort((a,b) => b.date - a.date );
                          } else {
                            return listData.sort((a,b) => a.date - b.date );
                          }
                        }
                      )
                    )
  }
}
