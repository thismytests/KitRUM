import {ChangeDetectionStrategy, Component, Input,} from '@angular/core';
import {Router} from '@angular/router';

// types
import {Item} from '../../search';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocksComponent {
  @Input() items: Array<Item> = [];

  constructor(public router: Router) {

  }
}
