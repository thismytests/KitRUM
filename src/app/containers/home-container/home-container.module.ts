import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';



// sections
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';

// routing
import {routing} from './routing';

// root
import {HomeContainerComponent} from './root';


const sections = [
  HeaderSectionModule,
  ContentSectionModule,
];

@NgModule({
  imports: [
    CommonModule,

    // ...sections
    ...sections,

    RouterModule.forChild(routing),
  ],
  declarations: [HomeContainerComponent]
})
export class HomeContainerModule {
}
