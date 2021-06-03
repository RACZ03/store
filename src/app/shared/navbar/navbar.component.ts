import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  .nav{
     height: 40px;
  }
`],
})
export class NavbarComponent  {

  public urlFace: string = 'https://www.facebook.com/Variedades-Angeles-105210708061550';
  public urlInstagram: string = '';
  public urlTwitter: string = '';

}
