import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiveComponent } from './product-five.component';

describe('ProductFiveComponent', () => {
  let component: ProductFiveComponent;
  let fixture: ComponentFixture<ProductFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
