import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriverDetailsComponent } from './view-driver-details.component';

describe('ViewDriverDetailsComponent', () => {
  let component: ViewDriverDetailsComponent;
  let fixture: ComponentFixture<ViewDriverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDriverDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDriverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
