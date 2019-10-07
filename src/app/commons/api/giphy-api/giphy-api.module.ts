import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';

// service
import {GiphyApiService} from './giphy-api.service';


@NgModule({
  declarations: [],
  providers: [
    GiphyApiService
  ],
  imports: [
    CommonModule,

    HttpClientModule
  ]
})
export class GiphyApiModule {
}
