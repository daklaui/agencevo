import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterOccupationComponent } from './modal-ajouter-occupation.component';

describe('ModalAjouterOccupationComponent', () => {
  let component: ModalAjouterOccupationComponent;
  let fixture: ComponentFixture<ModalAjouterOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
