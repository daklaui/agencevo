import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHotelsComponent } from './liste-hotels.component';

describe('ListeHotelsComponent', () => {
  let component: ListeHotelsComponent;
  let fixture: ComponentFixture<ListeHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
