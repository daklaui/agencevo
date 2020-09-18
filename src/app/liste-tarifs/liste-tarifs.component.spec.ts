import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTarifsComponent } from './liste-tarifs.component';

describe('ListeTarifsComponent', () => {
  let component: ListeTarifsComponent;
  let fixture: ComponentFixture<ListeTarifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTarifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
