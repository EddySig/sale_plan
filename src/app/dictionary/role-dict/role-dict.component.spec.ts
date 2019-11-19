import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDictComponent } from './role-dict.component';

describe('RoleDictComponent', () => {
  let component: RoleDictComponent;
  let fixture: ComponentFixture<RoleDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
