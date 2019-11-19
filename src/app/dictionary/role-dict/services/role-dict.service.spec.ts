import { TestBed } from '@angular/core/testing';

import { RoleDictService } from './role-dict.service';

describe('RoleDictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleDictService = TestBed.get(RoleDictService);
    expect(service).toBeTruthy();
  });
});
