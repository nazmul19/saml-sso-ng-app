import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamlFailureComponent } from './saml-failure.component';

describe('SamlFailureComponent', () => {
  let component: SamlFailureComponent;
  let fixture: ComponentFixture<SamlFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamlFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
