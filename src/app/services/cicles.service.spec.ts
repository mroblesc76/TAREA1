import { TestBed } from '@angular/core/testing';

import { CiclesService } from './cicles.service';

describe('CiclesService', () => {
  let service: CiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
