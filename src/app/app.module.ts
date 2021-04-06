import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Routes
import { AppRoutingModule } from './app-routing.module';

// Module
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

// Librery
import { NgxPaginationModule } from 'ngx-pagination';

// Pages
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { AccesoriesComponent } from './pages/accesories/accesories.component';

//components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    AccesoriesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    NgxPaginationModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
