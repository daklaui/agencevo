import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRChambreComponent } from './s-r-chambre.component';

describe('SRChambreComponent', () => {
  let component: SRChambreComponent;
  let fixture: ComponentFixture<SRChambreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRChambreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
