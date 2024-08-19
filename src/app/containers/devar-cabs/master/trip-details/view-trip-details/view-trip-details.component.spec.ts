import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTripDetailsComponent } from './view-trip-details.component';

describe('ViewTripDetailsComponent', () => {
  let component: ViewTripDetailsComponent;
  let fixture: ComponentFixture<ViewTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTripDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
