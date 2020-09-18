import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupplementSurPensionComponent } from './update-supplement-sur-pension.component';

describe('UpdateSupplementSurPensionComponent', () => {
  let component: UpdateSupplementSurPensionComponent;
  let fixture: ComponentFixture<UpdateSupplementSurPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSupplementSurPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSupplementSurPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
