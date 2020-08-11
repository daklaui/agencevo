import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageHotelComponent } from './parametrage-hotel.component';

describe('ParametrageHotelComponent', () => {
  let component: ParametrageHotelComponent;
  let fixture: ComponentFixture<ParametrageHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
