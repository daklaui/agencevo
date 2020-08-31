import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-update-equipements',
  templateUrl: './update-equipements.component.html',
  styleUrls: ['./update-equipements.component.css']
})
export class UpdateEquipementsComponent implements OnInit {
  @Input() id: number ;
  ListeEquipements:any=[];
  truthyValue=true;
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.GetEquipementParHotel(this.id).then((data)=>{
      this.ListeEquipements=data;
      console.log(this.ListeEquipements);
    });

   

  }

  abc(etat)
  {
    alert(etat);
  }

}
