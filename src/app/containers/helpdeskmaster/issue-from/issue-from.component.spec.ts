import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueFromComponent } from './issue-from.component';

describe('IssueFromComponent', () => {
  let component: IssueFromComponent;
  let fixture: ComponentFixture<IssueFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
