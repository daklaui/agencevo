import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {
listeEquipement:any=[];
@Input() id: number ;
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.GetEquipement().then((data)=>{
      this.listeEquipement=data;
      console.log("Promise resolved with: equipement " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with equipement " + JSON.stringify(error));
    });
    
  }

}
