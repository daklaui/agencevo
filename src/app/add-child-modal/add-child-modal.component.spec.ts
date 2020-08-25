import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildModalComponent } from './add-child-modal.component';

describe('AddChildModalComponent', () => {
  let component: AddChildModalComponent;
  let fixture: ComponentFixture<AddChildModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChildModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChildModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
