import {
  Component,
  OnDestroy, OnInit
} from '@angular/core';

// api
import {GiphyApiService} from '@app/commons/api/giphy-api';

// types api
import {Pagination} from '@app/commons/api/giphy-api/types';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.sass']
})
export class BlocksContainerComponent implements OnDestroy, OnInit {
  constructor(public giphyApiService: GiphyApiService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  searchTag: string = null;

  sub1: any;

  items: any = [];

  pagination: Pagination;


  ngOnInit(): void {
    this.route.queryParams.subscribe((data: {
      offset: string,
      tag: string
    }) => {
      this.sub1 = this.giphyApiService.getItems({tag: data.tag, offset: data.offset})
        .subscribe((gettingData) => {
          this.items = gettingData.data;
          this.pagination = gettingData.pagination;
        });
    });
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  onSearch(tag) {
    this.searchTag = tag;

    this.updateRouterQuery({tag});
  }

  onChoosePage(pageInfo: {
    currentPage: number;
    offset: number;
  }) {
    const offsetData: any = (pageInfo.currentPage * pageInfo.offset).toString();
    this.updateRouterQuery({offset: offsetData});
  }

  updateRouterQuery(data: {
    offset?: string;
    tag?: string
  }) {
    const queryParams = {};
    if (data.offset) {
      queryParams['offset'] = data.offset;
    }

    if (data.tag) {
      queryParams['tag'] = data.tag;
    }

    this.router.navigate(['/blocks'], {
      queryParams,
      queryParamsHandling: 'merge'
    });
  }
}
