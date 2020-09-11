import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-update-equipements',
  templateUrl: './update-equipements.component.html',
  styleUrls: ['./update-equipements.component.css']
})
export class UpdateEquipementsComponent implements OnInit {
  @Input() id: number ;
  ListeEquipements:any=[];
  truthyValue=true;
  ListeRating:any=[];
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.GetEquipementParHotel(this.id).then((data)=>{
      this.ListeEquipements=data;
      console.log(this.ListeEquipements);
    });

   

  }
  onRatingChange = ($event: RatingChangeEvent,x) => {
    
    this.ListeEquipements[x].Note=$event.rating;

    this.serviceBack.Update_equipement(this.ListeEquipements[x]).then((data)=>{
     
    });
   
  }
  abc(etat,x)
  {
    this.ListeEquipements[x].Etat=etat;

    this.serviceBack.Update_equipement(this.ListeEquipements[x]).then((data)=>{
     
    });
   
  }

}
