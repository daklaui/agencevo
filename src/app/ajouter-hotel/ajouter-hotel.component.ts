import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RatingChangeEvent } from 'angular-star-rating';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-ajouter-hotel',
  templateUrl: './ajouter-hotel.component.html',
  styleUrls: ['./ajouter-hotel.component.css'],
  providers:[ServiceBackService]
})
export class AjouterHotelComponent implements OnInit {
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
    
  }
  onRatingChange = ($event: RatingChangeEvent) => {
    
    console.log();
    console.log('onRatingUpdated $event: ', $event.rating);
    this.onRatingChangeResult = $event;
  }


  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }


  onSubmit(form: NgForm ) {
    form.value["Categorie"]=this.onRatingChangeResult.rating;
    this.serviceBack.Ajouter_Hotel(form.value).then((data)=>{
    let x : any =data;
      if(JSON.stringify(x.Etat).search("Valide"))
      {
        this.opensweetalert();

       // this.GetListeValeur();
      }
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });
  console.log(form.value);
  }


  onOptionsSelected(CountryName:String)
  {
    
    this.serviceBack.GetDevise(CountryName).then((data)=>{
      this.listeOfDevise=data[0].currencies;
      
      console.log("Promise resolved with: " + JSON.stringify(data[0].currencies));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
    alert(CountryName);
  }
}
