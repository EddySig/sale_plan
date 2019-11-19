import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecDictComponent } from './spec-dict.component';

describe('SpecDictComponent', () => {
  let component: SpecDictComponent;
  let fixture: ComponentFixture<SpecDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
