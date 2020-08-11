import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAddHotelComponent } from './formulaire-add-hotel.component';

describe('FormulaireAddHotelComponent', () => {
  let component: FormulaireAddHotelComponent;
  let fixture: ComponentFixture<FormulaireAddHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAddHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAddHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
