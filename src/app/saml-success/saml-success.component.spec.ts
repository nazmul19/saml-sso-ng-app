import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamlSuccessComponent } from './saml-success.component';

describe('SamlSuccessComponent', () => {
  let component: SamlSuccessComponent;
  let fixture: ComponentFixture<SamlSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamlSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
