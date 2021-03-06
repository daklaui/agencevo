import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RatingChangeEvent } from 'angular-star-rating';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { EquipementsComponent } from '../equipements/equipements.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { ChambresComponent } from '../chambres/chambres.component';
import { FormAjouterHotelComponent } from '../form-ajouter-hotel/form-ajouter-hotel.component';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-ajouter-hotel',
  templateUrl: './ajouter-hotel.component.html',
  styleUrls: ['./ajouter-hotel.component.css'],
  providers:[ServiceBackService],
  
})
export class AjouterHotelComponent implements OnInit {
  @ViewChild(EquipementsComponent, {static: false}) child: EquipementsComponent ; 
  @ViewChild(PresentationComponent, {static: false}) presentation: PresentationComponent ; 
  @ViewChild(ChambresComponent, {static: false}) Chambres: ChambresComponent ; 
  @ViewChild(FormAjouterHotelComponent, {static: false}) hotel: FormAjouterHotelComponent ; 
  constructor(private  serviceBack:ServiceBackService ,  private router: Router ) { }
 
  ngOnInit() {
    this.WizzardForm();
    /*this.serviceBack.GetListeCP().then((data)=>{
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
    });*/
    
  }
 /* onRatingChange = ($event: RatingChangeEvent) => {
    
    console.log();
    console.log('onRatingUpdated $event: ', $event.rating);
    this.onRatingChangeResult = $event;
  }*/


  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }


  onSubmit(form: NgForm ) {
  //  form.value["Categorie"]=this.onRatingChangeResult.rating;
   /* this.serviceBack.Ajouter_Hotel(form.value).then((data)=>{
    let x : any =data;
      if(JSON.stringify(x.Etat).search("Valide"))
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

/*
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

*/
 WizzardForm()
 {
//
$('#demo-main-wz').bootstrapWizard({
  tabClass		: 'wz-steps',
  nextSelector	: '.next',
  previousSelector	: '.previous',
  onTabClick: function(tab, navigation, index) {
      return false;
  },
  onInit : function(){
      $('#demo-main-wz').find('.finish').hide().prop('disabled', true);
  },
  onTabShow: function(tab, navigation, index) {
      var $total = navigation.find('li').length;
      var $current = index+1;
      var $percent = ($current/$total) * 100;
      var wdt = 100/$total;
      var lft = wdt*index;

      $('#demo-main-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});


      // If it's the last tab then hide the last button and show the finish instead
      if($current >= $total) {
          $('#demo-main-wz').find('.next').hide();
          $('#demo-main-wz').find('.finish').show();
          $('#demo-main-wz').find('.finish').prop('disabled', false);
      } else {
          $('#demo-main-wz').find('.next').show();
          $('#demo-main-wz').find('.finish').hide().prop('disabled', true);
      }
  }
});
 }
test()
{
    var equip=[];
    var presentation=[];
    var Chambres=[];
    equip=this.child.eventCheck();
    presentation=this.presentation.onFinich();
    Chambres=this.Chambres.GetChambreslist();
   
  this.serviceBack.Ajouter_Hotel(this.hotel.onGetHotelValue()).then(data=>{
    let x : any =data;
   
    presentation.forEach((value,index)=>{
      value.ID_Hotel=x.Id; 
      presentation[index]=value;
  
  });
  Chambres.forEach((value,index)=>{
      value.ID_Hotel=x.Id; 
      Chambres[index]=value;
  
  });
    equip.forEach((value,index)=>{
      value.ID_Hotel=x.Id; 
      equip[index]=value;

     
    
      });

      this.serviceBack.Ajouter_Pre(presentation).then(data=>{
        this.serviceBack.Ajouter_Equipement(equip).then(data=>{
          this.serviceBack.Ajouter_Chambre(Chambres).then(data=>{
            this.opensweetalert();

            this.router.navigate(['/Hotel',x.Id]);
          });
        });
       
    
  });
   
    // Ajoute de presentation
    
    

 
    //
  });

}

}
