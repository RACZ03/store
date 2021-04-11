import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'components-collections',
  templateUrl: './collections.component.html'
})
export class CollectionsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRedirection( option: string ) {
    if ( option === 'M' ) {
      this.router.navigateByUrl('/collections/men');
    } else {
      this.router.navigateByUrl('/collections/women');
    }
  }
}
