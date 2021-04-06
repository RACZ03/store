import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): string {
    const path: string = '../../../../assets/image/ma';
    return `${ path }/${ image }`;
  }

}
