import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImovelTerceiroPage } from './imovel-terceiro.page';

const routes: Routes = [
  {
    path: '',
    component: ImovelTerceiroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImovelTerceiroPage]
})
export class ImovelTerceiroPageModule {}
