import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassPermitOnlineRegistretionComponent } from './pass-permit-online-registretion.component';

describe('PassPermitOnlineRegistretionComponent', () => {
  let component: PassPermitOnlineRegistretionComponent;
  let fixture: ComponentFixture<PassPermitOnlineRegistretionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassPermitOnlineRegistretionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassPermitOnlineRegistretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
