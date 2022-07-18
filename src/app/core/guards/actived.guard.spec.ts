import { TestBed } from '@angular/core/testing';

import { ActivedGuard } from './actived.guard';

describe('ActivedGuard', () => {
  let guard: ActivedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
