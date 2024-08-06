import { TestBed } from '@angular/core/testing';

import { EviluiLibService } from './evilui-lib.service';

describe('EviluiLibService', () => {
  let service: EviluiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EviluiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
