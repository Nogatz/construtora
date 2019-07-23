import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisTerceirosPage } from './imoveis-terceiros.page';

describe('ImoveisTerceirosPage', () => {
  let component: ImoveisTerceirosPage;
  let fixture: ComponentFixture<ImoveisTerceirosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImoveisTerceirosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisTerceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
