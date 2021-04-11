import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html'
})
export class CollectionsComponent implements OnInit {

  public gender: string = '';
  constructor(
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe( param => this.gender = param.gender );
  }

}
