import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDictComponent } from './clients-dict.component';

describe('ClientsDictComponent', () => {
  let component: ClientsDictComponent;
  let fixture: ComponentFixture<ClientsDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
