import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuppRedChambreComponent } from './update-supp-red-chambre.component';

describe('UpdateSuppRedChambreComponent', () => {
  let component: UpdateSuppRedChambreComponent;
  let fixture: ComponentFixture<UpdateSuppRedChambreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSuppRedChambreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuppRedChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
