import { TestBed } from '@angular/core/testing';

import { SpecDictService } from './spec-dict.service';

describe('SpecDictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecDictService = TestBed.get(SpecDictService);
    expect(service).toBeTruthy();
  });
});
