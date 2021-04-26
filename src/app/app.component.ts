import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';

  showButton = false;
  private scrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document : Document
  ){}
  @HostListener('window:scroll')

  onWindowScroll(): void{
  const yOffSet = window.pageYOffset;
  const scrollTop = this.document.documentElement.scrollTop;
  this.showButton = (yOffSet || scrollTop) > this.scrollHeight;

  }
  onScrollTop(): void{
    this.document.documentElement.scrollTop = 0;
  }
}


