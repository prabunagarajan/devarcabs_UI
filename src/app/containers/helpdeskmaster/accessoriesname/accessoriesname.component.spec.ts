import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesnameComponent } from './accessoriesname.component';

describe('AccessoriesnameComponent', () => {
  let component: AccessoriesnameComponent;
  let fixture: ComponentFixture<AccessoriesnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
