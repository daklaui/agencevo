import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusterMinSejourDelaiRetroComponent } from './ajuster-min-sejour-delai-retro.component';

describe('AjusterMinSejourDelaiRetroComponent', () => {
  let component: AjusterMinSejourDelaiRetroComponent;
  let fixture: ComponentFixture<AjusterMinSejourDelaiRetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjusterMinSejourDelaiRetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusterMinSejourDelaiRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
