import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewVechileDetailsComponent } from './view-vechile-details.component';

describe('ViewVechileDetailsComponent', () => {
  let component: ViewVechileDetailsComponent;
  let fixture: ComponentFixture<ViewVechileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVechileDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVechileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
