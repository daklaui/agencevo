import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
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
export class FormulaireAddHotelComponent implements OnInit{
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
    
    this.AllAsync();
   // this.onOptionsSelected(this.Hotel.Pays);
   // $('select[name=Code_Postal]').val();


  }

async AllAsync()
{
  this.Hotel=await this.serviceBack.GetHotelWithId(this.id);
  this.ListeOfCodesPostals = await this.serviceBack.GetListeCP();
  this.ListeOfPays=await this.serviceBack.GetListeOffPays();
  this.listeOfChanieHotels=await  this.serviceBack.GetListeChaineHotels();
  this.listeOfTypeHotels= await this.serviceBack.GetListeTypeHotels();
  $('select[name=Pays]').val(this.Hotel.Pays);
  $('select[name=Code_Postal]').val(this.Hotel.Code_Postal);
  this.onOptionsSelected(this.Hotel.Pays);
    $('.selectpicker').selectpicker('refresh');
    $('.selectpicker').selectpicker({
      dropupAuto: false
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
    this.opensweetalert();
    /*this.serviceBack.Update_Hotel(form.value).then((data)=>{
    let x : any =data;
      if(JSON.stringify(x).search("Valide"))
      {
        this.opensweetalert();

       // this.GetListeValeur();
      }
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });*/
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
  
  }


}
