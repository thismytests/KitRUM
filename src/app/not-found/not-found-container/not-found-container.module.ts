import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// sections
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';

// children modules
import {NotFoundModule} from '../not-found-component/';

// root component
import {NotFoundContainerComponent} from './root';

const sections: Array<any> = [
  HeaderSectionModule,
  ContentSectionModule
];

@NgModule({
  imports: [
    CommonModule,

    ...sections,

    // children modules
    NotFoundModule
  ],
  declarations: [NotFoundContainerComponent]
})
export class NotFoundContainerModule {
}
