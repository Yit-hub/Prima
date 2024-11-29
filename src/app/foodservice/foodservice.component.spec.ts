import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodserviceComponent } from './foodservice.component';

describe('FoodserviceComponent', () => {
  let component: FoodserviceComponent;
  let fixture: ComponentFixture<FoodserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodserviceComponent]
    });
    fixture = TestBed.createComponent(FoodserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
