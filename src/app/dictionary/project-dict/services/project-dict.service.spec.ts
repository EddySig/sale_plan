import { TestBed } from '@angular/core/testing';

import { ProjectDictService } from './project-dict.service';

describe('ProjectDictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectDictService = TestBed.get(ProjectDictService);
    expect(service).toBeTruthy();
  });
});
