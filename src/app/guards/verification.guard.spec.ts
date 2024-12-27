import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { verificationGuard } from './verification.guard';

describe('verificationGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verificationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
