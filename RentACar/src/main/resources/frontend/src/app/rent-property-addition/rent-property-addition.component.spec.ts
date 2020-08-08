import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPropertyAdditionComponent } from './rent-property-addition.component';

describe('RentPropertyAdditionComponent', () => {
  let component: RentPropertyAdditionComponent;
  let fixture: ComponentFixture<RentPropertyAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPropertyAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPropertyAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
