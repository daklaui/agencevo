import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-ajouter-tarif',
  templateUrl: './ajouter-tarif.component.html',
  styleUrls: ['./ajouter-tarif.component.css']
})
export class AjouterTarifComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fonctionModal(){
    $('.modal').modal();
  }
}
