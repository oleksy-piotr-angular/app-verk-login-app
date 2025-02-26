import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canOpenIfLoggedInGuard } from './can-open-if-logged-in.guard';

describe('canOpenIfLoggedInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      canOpenIfLoggedInGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
