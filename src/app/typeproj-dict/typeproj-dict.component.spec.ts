import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeprojDictComponent } from './typeproj-dict.component';

describe('TypeprojDictComponent', () => {
  let component: TypeprojDictComponent;
  let fixture: ComponentFixture<TypeprojDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeprojDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeprojDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
