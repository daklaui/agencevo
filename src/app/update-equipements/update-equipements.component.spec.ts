import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEquipementsComponent } from './update-equipements.component';

describe('UpdateEquipementsComponent', () => {
  let component: UpdateEquipementsComponent;
  let fixture: ComponentFixture<UpdateEquipementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEquipementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
