import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empreendimento',
  templateUrl: './empreendimento.page.html',
  styleUrls: ['./empreendimento.page.scss'],
})
export class EmpreendimentoPage implements OnInit {

  event: any;
  className: string = 'textocaracteristicas';
  constructor() { }

  ngOnInit() {
  }

  mostrartexto: string = 'displayclass';
  mostrartexto2: string = 'displayclass';
  mostrartexto3: string = 'displayclass';

  mostrargaleria1: string = 'displaygaleriatrue';
  mostrargaleria2: string = 'displaygaleria';
  mostrargaleria3: string = 'displaygaleria';
  openTab1 () {
    this.mostrargaleria2 = 'displaygaleria';
    this.mostrargaleria3 = 'displaygaleria';
    if(this.mostrargaleria1 == 'displaygaleriatrue'){
      this.mostrargaleria1 = 'displaygaleria';
    }else{
      this.mostrargaleria1 = 'displaygaleriatrue';
    }
  }
  openTab2 () {
    this.mostrargaleria1 = 'displaygaleria';
    this.mostrargaleria3 = 'displaygaleria';
    if(this.mostrargaleria2 == 'displaygaleriatrue'){
      this.mostrargaleria2 = 'displaygaleria';
    }else{
      this.mostrargaleria2 = 'displaygaleriatrue';
    }
  }
  openTab3 () {
    this.mostrargaleria1 = 'displaygaleria';
    this.mostrargaleria2 = 'displaygaleria';
    if(this.mostrargaleria3 == 'displaygaleriatrue'){
      this.mostrargaleria3 = 'displaygaleria';
    }else{
      this.mostrargaleria3 = 'displaygaleriatrue';
    }
  }



  openClass () {
    if(this.mostrartexto == 'displayclasstrue'){
      this.mostrartexto = 'displayclass';
    }else{
      this.mostrartexto = 'displayclasstrue';
    }
  }

  openClass2 () {
    if(this.mostrartexto2 == 'displayclasstrue'){
      this.mostrartexto2 = 'displayclass';
    }else{
      this.mostrartexto2 = 'displayclasstrue';
    }
  }

  openClass3 () {
    if(this.mostrartexto3 == 'displayclasstrue'){
      this.mostrartexto3 = 'displayclass';
    }else{
      this.mostrartexto3 = 'displayclasstrue';
    }
  }

}
