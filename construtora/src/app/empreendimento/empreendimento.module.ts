import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Component } from "@angular/core";

import { IonicModule } from '@ionic/angular';

import { EmpreendimentoPage } from './empreendimento.page';

const routes: Routes = [
  {
    path: '',
    component: EmpreendimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmpreendimentoPage]
})
export class EmpreendimentoPageModule {
  public items: any = [];

  constructor() {
  }

  
}

