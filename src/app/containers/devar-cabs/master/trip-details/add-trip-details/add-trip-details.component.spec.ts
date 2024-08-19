import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTripDetailsComponent } from './add-trip-details.component';

describe('AddTripDetailsComponent', () => {
  let component: AddTripDetailsComponent;
  let fixture: ComponentFixture<AddTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTripDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
