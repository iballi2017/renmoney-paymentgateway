import { TestBed } from '@angular/core/testing';

import { NigerianstatesService } from './nigerianstates.service';

describe('NigerianstatesService', () => {
  let service: NigerianstatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NigerianstatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
