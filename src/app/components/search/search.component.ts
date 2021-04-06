import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() orderBy = new EventEmitter<boolean>();
  @Output() featured = new EventEmitter<boolean>();
  @Output() textSearch = new EventEmitter<string>();
  @Output() filterC = new EventEmitter<number>();

  public asc: boolean = false;
  public desc: boolean = true; 
  public feaOn: boolean = true;
  public feaOff: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
