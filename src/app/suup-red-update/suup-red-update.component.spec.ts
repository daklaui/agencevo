import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuupRedUpdateComponent } from './suup-red-update.component';

describe('SuupRedUpdateComponent', () => {
  let component: SuupRedUpdateComponent;
  let fixture: ComponentFixture<SuupRedUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuupRedUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuupRedUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
