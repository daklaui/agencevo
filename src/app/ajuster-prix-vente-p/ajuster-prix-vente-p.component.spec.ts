import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusterPrixVentePComponent } from './ajuster-prix-vente-p.component';

describe('AjusterPrixVentePComponent', () => {
  let component: AjusterPrixVentePComponent;
  let fixture: ComponentFixture<AjusterPrixVentePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjusterPrixVentePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusterPrixVentePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
