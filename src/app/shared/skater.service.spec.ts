import { TestBed } from '@angular/core/testing';

import { SkaterService } from './skater.service';

describe('SkaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkaterService = TestBed.get(SkaterService);
    expect(service).toBeTruthy();
  });
});
