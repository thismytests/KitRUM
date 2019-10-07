import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';

// sections
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';

// components
import {BlocksModule} from './components/blocks';
import {PaginationModule} from './components/pagination';

import {SearchModule} from './components/search';

// api
import {GiphyApiModule} from '@app/commons/api/giphy-api';

// routing
import {routing} from './routing';

// root
import {BlocksContainerComponent} from './root/blocks-container.component';
import {DeactivateGuardModule} from '@app/commons/guards/deactivate-guard';


const sections = [
  HeaderSectionModule,
  ContentSectionModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // api
    GiphyApiModule,

    DeactivateGuardModule,

    // components
    SearchModule,
    BlocksModule,
    PaginationModule,

    // sections
    ...sections,

    RouterModule.forChild(routing)
  ],
  declarations: [BlocksContainerComponent]
})
export class BlocksContainerModule {
}
