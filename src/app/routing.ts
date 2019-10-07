// routing
import {Route} from '@angular/router';

// config
import {pagesUrl} from '../environments/environment';
import {NotFoundContainerComponent} from './not-found/not-found-container/root';

// not found



export const routing: Array<Route> = [
  {
    path: '',
    redirectTo: pagesUrl.home,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundContainerComponent
  },
];
