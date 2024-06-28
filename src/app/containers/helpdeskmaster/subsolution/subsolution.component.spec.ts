import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsolutionComponent } from './subsolution.component';

describe('SubsolutionComponent', () => {
  let component: SubsolutionComponent;
  let fixture: ComponentFixture<SubsolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
