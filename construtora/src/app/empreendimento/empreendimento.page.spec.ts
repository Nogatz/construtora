import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreendimentoPage } from './empreendimento.page';

describe('EmpreendimentoPage', () => {
  let component: EmpreendimentoPage;
  let fixture: ComponentFixture<EmpreendimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpreendimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
