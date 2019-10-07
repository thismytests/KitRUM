import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NotFoundContainerModule} from '@app/not-found/not-found-container';
import {HomeContainerModule} from '@app/containers/home-container';
import {BlocksContainerModule} from '@app/containers/blocks-container';

// routing
import {routing} from './routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // router
    RouterModule.forRoot(routing),

    // containers
    HomeContainerModule,
    BlocksContainerModule,
    NotFoundContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
