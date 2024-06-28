import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNormalTableComponent } from './mat-normal-table.component';

describe('AdvMatNormalTableComponent', () => {
  let component: MatNormalTableComponent;
  let fixture: ComponentFixture<MatNormalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatNormalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatNormalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
