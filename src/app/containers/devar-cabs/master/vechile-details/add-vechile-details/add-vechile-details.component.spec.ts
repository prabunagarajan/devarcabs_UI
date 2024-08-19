import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVechileDetailsComponent } from './add-vechile-details.component';

describe('AddVechileDetailsComponent', () => {
  let component: AddVechileDetailsComponent;
  let fixture: ComponentFixture<AddVechileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVechileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVechileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
