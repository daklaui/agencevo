import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusterTarifsComponent } from './ajuster-tarifs.component';

describe('AjusterTarifsComponent', () => {
  let component: AjusterTarifsComponent;
  let fixture: ComponentFixture<AjusterTarifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjusterTarifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusterTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
