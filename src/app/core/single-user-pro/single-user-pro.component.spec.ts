import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserProComponent } from './single-user-pro.component';

describe('SingleUserProComponent', () => {
  let component: SingleUserProComponent;
  let fixture: ComponentFixture<SingleUserProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
