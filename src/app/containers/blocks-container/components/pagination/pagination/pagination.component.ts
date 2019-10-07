import {
  Component,
  Input,
  Output,
  OnInit,
  SimpleChanges,
  OnChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() itemsCount = 0;
  @Input() itemsInThePortion = 25;

  @Output() offset = 0;
  @Output() currentPage: EventEmitter<{
    currentPage: number;
    offset: number;
  }> = new EventEmitter<{
    currentPage: number;
    offset: number;
  }>();

  pagesCount = 0;
  maxPage = 20;

  constructor() {
  }

  ngOnInit() {
    this.pagesCount = this.definePagesCount(this.itemsCount, this.itemsInThePortion);
  }

  createAndFillArray(arrayLength): Array<any> {
    return new Array<any>(arrayLength);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pagesCount = this.definePagesCount(
      this.itemsCount,
      this.itemsInThePortion
    );
  }

  definePagesCount(itemsCount: number,
                   itemsInThePortion: number
  ): number {
    return Math.ceil(itemsCount / itemsInThePortion);
  }

  choosePage(pageNumber) {
    this.currentPage.emit({
      currentPage: pageNumber,
      offset: this.itemsInThePortion
    });
  }


}
