import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ParametrageHotelComponent } from '../parametrage-hotel/parametrage-hotel.component';
import { ServiceBackService } from '../service-back.service';
import { RatingChangeEvent } from 'angular-star-rating';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $ :any;
@Component({
  selector: 'app-formulaire-add-hotel',
  templateUrl: './formulaire-add-hotel.component.html',
  styleUrls: ['./formulaire-add-hotel.component.css']
})
export class FormulaireAddHotelComponent implements OnInit {
  @Input() id: number ;
  onRatingChangeResult: RatingChangeEvent;
  ListeOfCodesPostals :any=[];
  ListeOfPays:any=[];
  listeOfDevise:any=[];
  listeOfChanieHotels:any=[];
  listeOfTypeHotels:any=[];
  constructor(private  serviceBack:ServiceBackService) { }
  
  Hotel:any=new Object;
  ngOnInit() {
    this.serviceBack.GetHotelWithId(this.id).then((data)=>{
      this.Hotel=data;
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
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
    form.value["Id_Hotel"]=this.id;
    this.serviceBack.Update_Hotel(form.value).then((data)=>{
    let x : any =data;
      if(JSON.stringify(x).search("Valide"))
      {
        this.opensweetalert();

       // this.GetListeValeur();
      }
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });
 
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

  refreshSelect() {
    $('select[name=Pays]').val(this.Hotel.Pays);
    this.onOptionsSelected(this.Hotel.Pays);
    $('select[name=Code_Postal]').val(this.Hotel.Code_Postal);


    $('.selectpicker').selectpicker('refresh');
 }

}
