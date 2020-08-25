import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterHotelComponent } from './form-ajouter-hotel.component';

describe('FormAjouterHotelComponent', () => {
  let component: FormAjouterHotelComponent;
  let fixture: ComponentFixture<FormAjouterHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAjouterHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjouterHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
