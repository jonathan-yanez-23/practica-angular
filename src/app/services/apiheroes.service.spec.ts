import { TestBed } from '@angular/core/testing';

import { ApiheroesService } from './apiheroes.service';

describe('ApiheroesService', () => {
  let service: ApiheroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiheroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
