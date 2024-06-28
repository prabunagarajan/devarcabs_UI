import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObservationComponent } from './list-observation.component';

describe('ListObservationComponent', () => {
  let component: ListObservationComponent;
  let fixture: ComponentFixture<ListObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
