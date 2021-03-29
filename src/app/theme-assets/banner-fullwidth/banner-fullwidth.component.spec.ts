import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFullwidthComponent } from './banner-fullwidth.component';

describe('BannerFullwidthComponent', () => {
  let component: BannerFullwidthComponent;
  let fixture: ComponentFixture<BannerFullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFullwidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
