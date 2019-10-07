import {Route} from '@angular/router';

// config
import {pagesUrl} from 'environments/environment';


// root
import {BlocksContainerComponent} from './root';
import {CanDeactivateGuard} from '@app/commons/guards/deactivate-guard';

export const routing: Array<Route> = [
  {
    path: pagesUrl.blocks,
    component: BlocksContainerComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];
