import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationAPKComponent } from './configuration-apk.component';

describe('ConfigurationAPKComponent', () => {
  let component: ConfigurationAPKComponent;
  let fixture: ComponentFixture<ConfigurationAPKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationAPKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationAPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
