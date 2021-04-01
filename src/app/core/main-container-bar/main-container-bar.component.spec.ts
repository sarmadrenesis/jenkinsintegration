import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerBarComponent } from './main-container-bar.component';

describe('MainContainerBarComponent', () => {
  let component: MainContainerBarComponent;
  let fixture: ComponentFixture<MainContainerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContainerBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
