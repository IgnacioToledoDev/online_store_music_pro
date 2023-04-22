import { TestBed } from '@angular/core/testing';

import { ShoppCartService } from './shopp-cart.service';

describe('ShoppCartService', () => {
  let service: ShoppCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
