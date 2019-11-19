import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDictComponent } from './project-dict.component';

describe('ProjectDictComponent', () => {
  let component: ProjectDictComponent;
  let fixture: ComponentFixture<ProjectDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
