import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// spinner
import {SpinnerModule} from 'app/commons/components/spinner';

// api
import {GiphyApiModule} from '@app/commons/api/giphy-api';

// root
import {BlocksComponent} from './root/blocks.component';

@NgModule({
  imports: [
    CommonModule,

    // spinner
    SpinnerModule,

    FormsModule,
    RouterModule,

    // api
    GiphyApiModule
  ],
  declarations: [BlocksComponent],
  exports: [BlocksComponent],
})
export class BlocksModule {
}
