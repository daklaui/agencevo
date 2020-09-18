import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusterPrixVenteValeurComponent } from './ajuster-prix-vente-valeur.component';

describe('AjusterPrixVenteValeurComponent', () => {
  let component: AjusterPrixVenteValeurComponent;
  let fixture: ComponentFixture<AjusterPrixVenteValeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjusterPrixVenteValeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusterPrixVenteValeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
