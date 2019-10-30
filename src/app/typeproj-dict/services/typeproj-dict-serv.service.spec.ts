import { TestBed } from '@angular/core/testing';

import { TypeprojDictServService } from './typeproj-dict-serv.service';

describe('TypeprojDictServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeprojDictServService = TestBed.get(TypeprojDictServService);
    expect(service).toBeTruthy();
  });
});
