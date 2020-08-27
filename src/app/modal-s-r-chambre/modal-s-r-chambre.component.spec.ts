import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSRChambreComponent } from './modal-s-r-chambre.component';

describe('ModalSRChambreComponent', () => {
  let component: ModalSRChambreComponent;
  let fixture: ComponentFixture<ModalSRChambreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSRChambreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSRChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
