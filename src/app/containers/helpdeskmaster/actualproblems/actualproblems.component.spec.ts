import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualproblemsComponent } from './actualproblems.component';

describe('ActualproblemsComponent', () => {
  let component: ActualproblemsComponent;
  let fixture: ComponentFixture<ActualproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
