import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openVisitante(){
    this.router.navigateByUrl('/institucional');
  }
  openCorretor(){
    alert('login corretor');
  }

}
