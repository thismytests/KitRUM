import {
  Component, Inject
} from '@angular/core';

// config
import {pagesUrl} from 'environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.sass']
})
export class HeaderSectionComponent {

  userUnfo = {
    photoURL: null,
    email: null
  };

  private sub1 = null;

  constructor(@Inject(pagesUrl) private pagesUrlLinks,
              private router: Router) {
  }


  relocateHome() {
    this.router.navigate([pagesUrl.home]);
  }

  ngOnInit(): void {

  }

}


