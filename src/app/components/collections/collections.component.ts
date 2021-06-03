import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'components-collections',
  templateUrl: './collections.component.html'
})
export class CollectionsComponent {

  constructor(
    private router: Router
  ) { }
  
  onRedirection( option: string ) {
    if ( option === 'M' ) {
      this.router.navigateByUrl('/collections/men');
    } else {
      this.router.navigateByUrl('/collections/women');
    }
  }
}
