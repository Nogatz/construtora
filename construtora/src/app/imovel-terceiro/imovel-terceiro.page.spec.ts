import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelTerceiroPage } from './imovel-terceiro.page';

describe('ImovelTerceiroPage', () => {
  let component: ImovelTerceiroPage;
  let fixture: ComponentFixture<ImovelTerceiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImovelTerceiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelTerceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
