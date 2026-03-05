import { TestBed } from '@angular/core/testing';

import { ServNom } from './serv-nom';

describe('ServNom', () => {
  let service: ServNom;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServNom);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
