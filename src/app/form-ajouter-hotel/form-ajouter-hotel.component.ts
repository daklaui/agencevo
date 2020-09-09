import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RatingChangeEvent } from 'angular-star-rating';
import { ServiceBackService } from '../service-back.service';
import { NgForm } from '@angular/forms';
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
  anyob:any={};
 
  constructor(private  serviceBack:ServiceBackService ) { }

  ngOnInit() {

    this.AllAsync();
 
   
  }
  onRatingChange = ($event: RatingChangeEvent) => {
    
    console.log();
    console.log('onRatingUpdated $event: ', $event.rating);
    this.onRatingChangeResult = $event;

  }



 async AllAsync()
 {
   
   this.ListeOfCodesPostals = await this.serviceBack.GetListeCP();
   this.ListeOfPays=await this.serviceBack.GetListeOffPays();
  // this.listeOfChanieHotels=await  this.serviceBack.GetListeChaineHotels();
   this.listeOfTypeHotels= await this.serviceBack.GetListeTypeHotels();
   $('.selectpicker').selectpicker('refresh');
 }
 


 onOptionsSelected(CountryName:String)
 {
   
   this.serviceBack.GetDevise(CountryName).then((data)=>{
     this.listeOfDevise=data[0].currencies;
     
     console.log("Promise resolved with: " + JSON.stringify(data[0].currencies));
   }).catch((error)=>{
     console.log("Promise rejected with " + JSON.stringify(error));
   });
 }


 onSubmit(form: NgForm ) {
  form.value["Categorie"]=this.onRatingChangeResult.rating;
  this.anyob=form.value;
  //console.log(form.value);
  }

  onGetHotelValue()
  {
    $("#onSub").trigger("click");
    return this.anyob;
  }
}
