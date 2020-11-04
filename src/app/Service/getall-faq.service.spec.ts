import { TestBed } from '@angular/core/testing';

import { GetallFAQService } from './getall-faq.service';

describe('GetallFAQService', () => {
  let service: GetallFAQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallFAQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
