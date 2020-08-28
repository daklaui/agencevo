import { Component, OnInit } from '@angular/core';
import { RatingChangeEvent } from 'angular-star-rating';
import { ServiceBackService } from '../service-back.service';
declare var $ :any;
@Component({
  selector: 'app-form-ajouter-hotel',
  templateUrl: './form-ajouter-hotel.component.html',
  styleUrls: ['./form-ajouter-hotel.component.css']
})
export class FormAjouterHotelComponent implements OnInit {
  onRatingChangeResult: RatingChangeEvent;
  ListeOfCodesPostals :any=[];
  ListeOfPays:any=[];
  listeOfDevise:any=[];
  listeOfChanieHotels:any=[];
  listeOfTypeHotels:any=[];
 
  constructor(private  serviceBack:ServiceBackService ) { }
 
  ngOnInit() {
   
    this.serviceBack.GetListeCP().then((data)=>{
      this.ListeOfCodesPostals=data;
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
    this.serviceBack.GetListeOffPays().then((data)=>{
      this.ListeOfPays=data;
      $('.selectpicker').selectpicker('refresh');
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });
    this.serviceBack.GetListeChaineHotels().then((data)=>{
      this.listeOfChanieHotels=data;
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });
    this.serviceBack.GetListeTypeHotels().then((data)=>{
      this.listeOfTypeHotels=data;
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });
    $('.selectpicker').selectpicker();
  }
  onRatingChange = ($event: RatingChangeEvent) => {
    
    console.log();
    console.log('onRatingUpdated $event: ', $event.rating);
    this.onRatingChangeResult = $event;
  }

  refreshSelect() {
    $('.selectpicker').selectpicker('refresh');
 }
}
