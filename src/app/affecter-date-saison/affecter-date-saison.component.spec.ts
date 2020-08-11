import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterDateSaisonComponent } from './affecter-date-saison.component';

describe('AffecterDateSaisonComponent', () => {
  let component: AffecterDateSaisonComponent;
  let fixture: ComponentFixture<AffecterDateSaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterDateSaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterDateSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
