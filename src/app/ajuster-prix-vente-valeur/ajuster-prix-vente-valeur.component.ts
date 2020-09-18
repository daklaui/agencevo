import { Component, Input, OnInit } from '@angular/core';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-ajuster-prix-vente-valeur',
  templateUrl: './ajuster-prix-vente-valeur.component.html',
  styleUrls: ['./ajuster-prix-vente-valeur.component.css']
})
export class AjusterPrixVenteValeurComponent implements OnInit {
  @Input() id:Number;
  ListeDesChambres:any=[];
  ListeDesSaison:any=[];
  constructor(private serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.GetLesChambresHotel(this.id).then(data=>{
      this.ListeDesChambres=data;
    });
    
    this.serviceBack.GetLesDetSHotel(this.id).then(data=>{
      this.ListeDesSaison=data;
    });
  }

}
