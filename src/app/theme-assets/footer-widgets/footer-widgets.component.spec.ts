import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWidgetsComponent } from './footer-widgets.component';

describe('FooterWidgetsComponent', () => {
  let component: FooterWidgetsComponent;
  let fixture: ComponentFixture<FooterWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
