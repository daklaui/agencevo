import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { ParametrageHotelComponent } from '../parametrage-hotel/parametrage-hotel.component';
import { ServiceBackService } from '../service-back.service';
import { RatingChangeEvent } from 'angular-star-rating';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
  constructor(private  serviceBack:ServiceBackService,private fb:FormBuilder) { 



  }
  
  Hotel:any=new Object;

  HotelForm:FormGroup;
  

  ngOnInit() {
    this.AllAsync();
    this.serviceBack.GetHotelWithId(this.id).then(data=>{
      this.Hotel=data;
     console.log(this.Hotel);
      this.HotelForm= new FormGroup({
        Id_Hotel : new FormControl(this.Hotel.Id_Hotel),
        Nom_Hotel : new FormControl(this.Hotel.Nom_Hotel),
        Type_H : new FormControl(this.Hotel.Type_H),
        Adresse : new FormControl(this.Hotel.Adresse),
        Categorie : new FormControl(this.Hotel.Categorie),
        Pays : new FormControl(this.Hotel.Pays),
        Site_Web : new FormControl(this.Hotel.Site_Web),
        Langue : new FormControl(this.Hotel.Langue),
        Email : new FormControl(this.Hotel.Email),
        Telephone : new FormControl(this.Hotel.Telephone),
        Devise : new FormControl(this.Hotel.Devise),
        Code_Postal : new FormControl(this.Hotel.Code_Postal),
        Fixe : new FormControl(this.Hotel.Fixe),
        H_Arr : new FormControl(this.Hotel.H_Arr),
        H_Depart : new FormControl(this.Hotel.H_Depart),
        Distance_Centre_V : new FormControl(this.Hotel.Distance_Centre_V),
        Distance_A : new FormControl(this.Hotel.Distance_A),
        Longitude_Laitetude : new FormControl(this.Hotel.Longitude_Laitetude),
        Themes : new FormControl(this.Hotel.Themes.split(','))
    
      });
    });



    
   // this.onOptionsSelected(this.Hotel.Pays);
   // $('select[name=Code_Postal]').val();


  }

async AllAsync()
{





  

  this.ListeOfCodesPostals = await this.serviceBack.GetListeCP();
  this.ListeOfPays=await this.serviceBack.GetListeOffPays();
  //this.listeOfChanieHotels=await  this.serviceBack.GetListeChaineHotels();
  this.listeOfTypeHotels= await this.serviceBack.GetListeTypeHotels();
  $('select[name=Pays]').val(this.Hotel.Pays);
  $('select[name=Code_Postal]').val(this.Hotel.Code_Postal);
  this.onOptionsSelected(this.Hotel.Pays);
    $('.selectpicker').selectpicker('refresh');
}

  

  onRatingChange = ($event: RatingChangeEvent) => {

    this.onRatingChangeResult = $event;
  }
  
  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }


  onSubmit( ) {

    this.HotelForm.value["Categorie"]=this.onRatingChangeResult.rating;
    console.log(this.HotelForm.value);
    if( this.HotelForm.value["Themes"]!=null)
    {
      this.HotelForm.value["Themes"]= this.HotelForm.value["Themes"].toString();
    }

  
    this.serviceBack.Update_Hotel(this.HotelForm.value).then((data)=>{
    let x : any =data;
      if(JSON.stringify(x).search("Valide"))
      {
        this.opensweetalert();
      }
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });
    //console.log(this.HotelForm.value);
 
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
