import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-terceiro',
  templateUrl: './imovel-terceiro.page.html',
  styleUrls: ['./imovel-terceiro.page.scss'],
})
export class ImovelTerceiroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrargaleria1: string = 'displaygaleriatrue';

  mostrartexto: string = 'displayclass';
  openClass () {
    if(this.mostrartexto == 'displayclasstrue'){
      this.mostrartexto = 'displayclass';
    }else{
      this.mostrartexto = 'displayclasstrue';
    }
  }
}
