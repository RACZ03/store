import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ClasificationI, SizerI, SizezI, SizepI } from '../../interfaces/interfaces';
import { SizeService } from '../../services/size.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() bandFilterR: boolean = false;
  @Input() bandFilterP: boolean = false;
  @Input() bandFilterZ: boolean = false;
  @Output() orderBy = new EventEmitter<boolean>();
  @Output() featured = new EventEmitter<boolean>();
  @Output() textSearch = new EventEmitter<string>();
  @Output() filterC = new EventEmitter<number>();

  public asc: boolean = false;
  public desc: boolean = true; 
  public feaOn: boolean = true;
  public feaOff: boolean = false;
  public checked: boolean[] = [];
  public checkedSizeR: boolean[] = [];
  public checkedSizeZ: boolean[] = [];
  public checkedSizeP: boolean[] = [];
  public clasifications: ClasificationI[] = [];
  public sizeR: SizerI[] = [];
  public sizeZ: SizezI[] = [];
  public sizeP: SizepI[] = [];

  constructor(
    private catergoryService: CategoriesService,
    private sizeService: SizeService
  ) {
    this.checked[3] = true; this.checked[2] = false; this.checked[1] = false; this.checked[0] = false;
  }

  ngOnInit(): void {
    this.getClasifications();
    this.getSizeR();
    this.getSizeZ();
    this.getSizeP();
  }

  getClasifications() {
    this.catergoryService.getClasifications().subscribe( resp => {
      this.clasifications = resp;
    })
  }

  getSizeR() {
    this.sizeService.getSizer().subscribe( resp => {
      this.sizeR = resp;
      for (let i = 0; i < this.sizeR.length; i++) {
        if (this.sizeR[i].size === 'TODOS') {
          this.checkedSizeR[i] = true;
        } else {
          this.checkedSizeR[i] = false;
        }
      }
    })
  }
  getSizeZ() {
    this.sizeService.getSizez().subscribe( resp => {
      this.sizeZ = resp;
      for (let i = 0; i < this.sizeZ.length; i++) {
        if (i === 0) {
          this.checkedSizeZ[i] = true;
        } else {
          this.checkedSizeZ[i] = false;
        }
      }
    })
  }

  getSizeP() {
    this.sizeService.getSizep().subscribe( resp => {
      this.sizeP = resp;
      for (let i = 0; i < this.sizeP.length; i++) {
        if (i === 0) {
          this.checkedSizeP[i] = true;
        } else {
          this.checkedSizeP[i] = false;
        }
      }
    })
  }

  filterClasification(option: number) {
    if (option === 4) {
      this.checked[3] = true; this.checked[2] = false; this.checked[1] = false; this.checked[0] = false;
      this.filterC.emit(4);
    } else if ( option === 1 ) {
      this.checked[3] = false; this.checked[2] = false; this.checked[1] = false; this.checked[0] = true;
      this.filterC.emit(2);
    } else if ( option ===  2) {
      this.checked[3] = false; this.checked[2] = false; this.checked[1] = true; this.checked[0] = false;
      this.filterC.emit(1);
    }  else if ( option === 3 ) {
      this.checked[3] = false; this.checked[2] = true; this.checked[1] = false; this.checked[0] = false;
      this.filterC.emit(3);
    } else {
      this.checked[3] = true; this.checked[2] = false; this.checked[1] = false; this.checked[0] = false;
      this.filterC.emit(4);
    }

  }

  onFilterSizeR( item: string ) {
    for (let i = 0; i < this.checkedSizeR.length; i++) {
      if (this.sizeR[i].size === item){
        this.checkedSizeR[i] = true;
      } else {
        this.checkedSizeR[i] = false;
      }
    }
  }
  
  onFilterSizeZ( item: number ) {
    for (let i = 0; i < this.checkedSizeZ.length; i++) {
      if (i === item){
        this.checkedSizeZ[i] = true;
      } else {
        this.checkedSizeZ[i] = false;
      }
    }
  }

  
  onFilterSizeP( item: number ) {
    for (let i = 0; i < this.checkedSizeP.length; i++) {
      if (i === item){
        this.checkedSizeP[i] = true;
      } else {
        this.checkedSizeP[i] = false;
      }
    }
  }
}
