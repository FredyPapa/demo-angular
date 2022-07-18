import { TestBed } from '@angular/core/testing';

import { InactivedGuard } from './inactived.guard';

describe('InactivedGuard', () => {
  let guard: InactivedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InactivedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
