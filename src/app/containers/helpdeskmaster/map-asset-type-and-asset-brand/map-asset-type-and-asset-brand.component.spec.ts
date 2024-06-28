import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAssetTypeAndAssetBrandComponent } from './map-asset-type-and-asset-brand.component';

describe('MapAssetTypeAndAssetBrandComponent', () => {
  let component: MapAssetTypeAndAssetBrandComponent;
  let fixture: ComponentFixture<MapAssetTypeAndAssetBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAssetTypeAndAssetBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAssetTypeAndAssetBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
