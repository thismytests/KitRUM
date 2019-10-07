import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// enviroment
import {pagesUrl} from '@env/environment';

// root
import {HeaderSectionComponent} from './root';


@NgModule({
  imports: [
    CommonModule,
    // routing
    RouterModule,
  ],
  declarations: [HeaderSectionComponent],
  providers: [
    {
      provide: pagesUrl,
      useValue: pagesUrl
    }
  ],
  exports: [HeaderSectionComponent]
})
export class HeaderSectionModule {
}
