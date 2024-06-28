import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteIssueTypeComponent } from './site-issue-type.component';

describe('SiteIssueTypeComponent', () => {
  let component: SiteIssueTypeComponent;
  let fixture: ComponentFixture<SiteIssueTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteIssueTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteIssueTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
