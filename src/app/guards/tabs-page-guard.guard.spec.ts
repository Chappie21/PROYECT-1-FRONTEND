import { TestBed } from '@angular/core/testing';

import { TabsPageGuardGuard } from './tabs-page-guard.guard';

describe('TabsPageGuardGuard', () => {
  let guard: TabsPageGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TabsPageGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
