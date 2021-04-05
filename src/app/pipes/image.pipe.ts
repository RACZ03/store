import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): string {
    const url: string = 'assets/img/products';
    return `${ url }/${ image }`;
  }

}
