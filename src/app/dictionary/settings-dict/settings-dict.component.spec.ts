import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDictComponent } from './settings-dict.component';

describe('SettingsDictComponent', () => {
  let component: SettingsDictComponent;
  let fixture: ComponentFixture<SettingsDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
