import { TestBed } from '@angular/core/testing';

import { ApiService } from './apiService.service';

describe('ApiserviceService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
