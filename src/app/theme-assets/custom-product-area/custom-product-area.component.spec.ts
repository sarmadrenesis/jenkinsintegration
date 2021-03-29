import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductAreaComponent } from './custom-product-area.component';

describe('CustomProductAreaComponent', () => {
  let component: CustomProductAreaComponent;
  let fixture: ComponentFixture<CustomProductAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
