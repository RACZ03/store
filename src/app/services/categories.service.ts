import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryI, ClasificationI } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

constructor(
  private http: HttpClient
) { }

  getCategories() {
    return this.http.get<CategoryI[]>('/assets/data/categories.json');
  }

  getClasifications() {
    return this.http.get<ClasificationI[]>('/assets/data/clasifications.json');
  }
}
