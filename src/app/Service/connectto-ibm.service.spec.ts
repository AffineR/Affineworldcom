import { TestBed } from '@angular/core/testing';

import { ConnecttoIBMService } from './connectto-ibm.service';

describe('ConnecttoIBMService', () => {
  let service: ConnecttoIBMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnecttoIBMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
