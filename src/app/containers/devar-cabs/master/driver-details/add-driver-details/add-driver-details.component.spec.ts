import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverDetailsComponent } from './add-driver-details.component';

describe('AddDriverDetailsComponent', () => {
  let component: AddDriverDetailsComponent;
  let fixture: ComponentFixture<AddDriverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDriverDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
