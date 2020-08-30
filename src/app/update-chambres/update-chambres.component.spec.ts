import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChambresComponent } from './update-chambres.component';

describe('UpdateChambresComponent', () => {
  let component: UpdateChambresComponent;
  let fixture: ComponentFixture<UpdateChambresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChambresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
