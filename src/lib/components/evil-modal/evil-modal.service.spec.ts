import { TestBed } from '@angular/core/testing';

import { EvilModalService } from './evil-modal.service';

describe('EvilModalService', () => {
  let service: EvilModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvilModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
