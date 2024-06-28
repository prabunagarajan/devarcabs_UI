import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfLabValComponent } from './prof-lab-val.component';

describe('ProfLabValComponent', () => {
  let component: ProfLabValComponent;
  let fixture: ComponentFixture<ProfLabValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfLabValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfLabValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
