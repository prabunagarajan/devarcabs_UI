import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColThreeLabelComponent } from './col-three-label.component';

describe('ColThreeLabelComponent', () => {
  let component: ColThreeLabelComponent;
  let fixture: ComponentFixture<ColThreeLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColThreeLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColThreeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
