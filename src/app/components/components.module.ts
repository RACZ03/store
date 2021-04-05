import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './featured/list/list.component';
import { ItemComponent } from './featured/item/item.component';
import { SearchComponent } from './search/search.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    SearchComponent
  ],
  exports: [
    ListComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class ComponentsModule { }
