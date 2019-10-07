import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// Rxjs
import {Observable} from 'rxjs';

// config
import {environment} from 'environments/environment';

// api
import {
  Api
} from '@app/commons/api/giphy-api';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {

  private host = environment.giphy.url;

  constructor(public http: HttpClient) {
  }

  getItems(query: {
    tag: string,
    offset: string
  }): any {
    const url = this.host + '/v1/gifs/search';

    const search = {
      q: query.tag,
      api_key: environment.giphy.apiKey,
      offset: query.offset
    };

    return this.http.get(url, {
      params: search
    }) as (Observable<Api>);

  }
}
