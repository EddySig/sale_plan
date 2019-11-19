import { TestBed } from '@angular/core/testing';

import { SettingsDictService } from './settings-dict.service';

describe('SettingsDictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsDictService = TestBed.get(SettingsDictService);
    expect(service).toBeTruthy();
  });
});
