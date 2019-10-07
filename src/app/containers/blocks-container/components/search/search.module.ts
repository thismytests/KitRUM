import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

// root
import {SearchComponent} from './root/search.component';


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {
}
