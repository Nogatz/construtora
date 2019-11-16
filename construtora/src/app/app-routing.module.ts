import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrada',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

  { path: 'institucional', loadChildren: './institucional/institucional.module#InstitucionalPageModule' },
  { path: 'empreendimentos', loadChildren: './empreendimentos/empreendimentos.module#EmpreendimentosPageModule' },
  { path: 'imoveis-terceiros', loadChildren: './imoveis-terceiros/imoveis-terceiros.module#ImoveisTerceirosPageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' },
  { path: 'empreendimento', loadChildren: './empreendimento/empreendimento.module#EmpreendimentoPageModule' },
  { path: 'imovel-terceiro', loadChildren: './imovel-terceiro/imovel-terceiro.module#ImovelTerceiroPageModule' },
  { path: 'entrada', loadChildren: './entrada/entrada.module#EntradaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
