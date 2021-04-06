import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './featured/list/list.component';
import { ItemComponent } from './featured/item/item.component';
import { SearchComponent } from './search/search.component';
import { PipesModule } from '../pipes/pipes.module';
import { CollectionsComponent } from './collections/collections.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    SearchComponent,
    CollectionsComponent
  ],
  exports: [
    ListComponent,
    ItemComponent,
    SearchComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    NgxPaginationModule
  ]
})
export class ComponentsModule { }
