import { Component, OnInit, Input, ViewChild } from '@angular/core';
import{AjouterTarifFormComponent} from '../ajouter-tarif-form/ajouter-tarif-form.component';
@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.css']
})
export class TarifsComponent implements OnInit {
  @Input() id:number;
  public viewMode="tab1";
  @ViewChild(AjouterTarifFormComponent, {static: false}) ajouterTarifComponent: AjouterTarifFormComponent ; 
  constructor() { }

  ngOnInit() {
  }
  RouterMethode(event)
  {

    this.viewMode="tab5";
  }
}
