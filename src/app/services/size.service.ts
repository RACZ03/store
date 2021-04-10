import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SizerI, SizezI, SizepI } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

constructor(
  private http: HttpClient
) { }

  getSizer() {
    return this.http.get<SizerI[]>('/assets/data/sizer.json');
  }

  getSizez() {
    return this.http.get<SizezI[]>('/assets/data/sizez.json');
  }

  getSizep() {
    return this.http.get<SizepI[]>('/assets/data/sizep.json');
  }
}
