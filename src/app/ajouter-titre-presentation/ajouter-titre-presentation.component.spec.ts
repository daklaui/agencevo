import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTitrePresentationComponent } from './ajouter-titre-presentation.component';

describe('AjouterTitrePresentationComponent', () => {
  let component: AjouterTitrePresentationComponent;
  let fixture: ComponentFixture<AjouterTitrePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTitrePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTitrePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
