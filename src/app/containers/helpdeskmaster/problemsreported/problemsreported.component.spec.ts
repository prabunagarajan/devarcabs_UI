import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsreportedComponent } from './problemsreported.component';

describe('ProblemsreportedComponent', () => {
  let component: ProblemsreportedComponent;
  let fixture: ComponentFixture<ProblemsreportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsreportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsreportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
