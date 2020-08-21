import { TestBed } from '@angular/core/testing';

import { ServiceBackService } from './service-back.service';

describe('ServiceBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBackService = TestBed.get(ServiceBackService);
    expect(service).toBeTruthy();
  });
});
