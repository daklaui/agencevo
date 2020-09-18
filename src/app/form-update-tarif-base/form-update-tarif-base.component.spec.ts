import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateTarifBaseComponent } from './form-update-tarif-base.component';

describe('FormUpdateTarifBaseComponent', () => {
  let component: FormUpdateTarifBaseComponent;
  let fixture: ComponentFixture<FormUpdateTarifBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateTarifBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateTarifBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
