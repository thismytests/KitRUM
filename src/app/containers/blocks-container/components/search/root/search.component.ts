import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() items: EventEmitter<any> = new EventEmitter<any>();
  public SEARCH = 'search';

  sub1: any;
  searchForm: FormGroup;

  ngOnInit() {
    this.createFrom();
    this.sub1 = this.searchForm.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(data => {
        this.onSearch(data[this.SEARCH]);
      });
  }

  createFrom() {
    const formControls: any = {
      [this.SEARCH]: new FormControl('', [
        Validators.required
      ])
    };
    this.searchForm = new FormGroup(formControls);
  }

  onSearch(query) {
    this.items.emit(query);
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }

  }


}
