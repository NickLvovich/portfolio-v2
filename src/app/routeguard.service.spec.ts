import { TestBed } from '@angular/core/testing';

import { RouteguardService } from './routeguard.service';

describe('RoutguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteguardService = TestBed.get(RouteguardService);
    expect(service).toBeTruthy();
  });
});
