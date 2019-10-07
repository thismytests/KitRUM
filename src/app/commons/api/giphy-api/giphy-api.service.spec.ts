import { TestBed } from '@angular/core/testing';

import { GiphyApiService } from './giphy-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GiphyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GiphyApiService = TestBed.get(GiphyApiService);
    expect(service).toBeTruthy();
  });
});
