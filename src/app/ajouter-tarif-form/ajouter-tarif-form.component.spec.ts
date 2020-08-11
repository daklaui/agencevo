import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTarifFormComponent } from './ajouter-tarif-form.component';

describe('AjouterTarifFormComponent', () => {
  let component: AjouterTarifFormComponent;
  let fixture: ComponentFixture<AjouterTarifFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTarifFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTarifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
