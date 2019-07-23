import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImoveisTerceirosPage } from './imoveis-terceiros.page';

const routes: Routes = [
  {
    path: '',
    component: ImoveisTerceirosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImoveisTerceirosPage]
})
export class ImoveisTerceirosPageModule {}
