import { TestBed } from '@angular/core/testing';

import { HttpBasicAuthInterceptorService } from './http-basic-auth-interceptor.service';

describe('HttpBasicAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpBasicAuthInterceptorService = TestBed.get(HttpBasicAuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
