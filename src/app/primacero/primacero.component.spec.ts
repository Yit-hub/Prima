import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaceroComponent } from './primacero.component';

describe('PrimaceroComponent', () => {
  let component: PrimaceroComponent;
  let fixture: ComponentFixture<PrimaceroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaceroComponent]
    });
    fixture = TestBed.createComponent(PrimaceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
