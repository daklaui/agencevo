import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $: any;
@Component({
  selector: 'app-update-chambres',
  templateUrl: './update-chambres.component.html',
  styleUrls: ['./update-chambres.component.css']
})
export class UpdateChambresComponent implements OnInit {
 ListeOfChambres:any=[];
 ListeCategorie:any=[];
ListeVue:any=[];
ListeType_Vente:any=[];
 @Input() id:number;
  constructor(private  serviceBack:ServiceBackService) { }
  chambreForm:FormGroup;
  ngOnInit() {
    this.serviceBack.GetTypeVente().then((data)=>{
      this.ListeType_Vente=data;
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
    this.serviceBack.GetCategorie().then((data)=>{
      this.ListeCategorie=data;
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
    this.serviceBack.GetVue().then((data)=>{
      this.ListeVue=data;
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });




  }


  onSubmit(form:NgForm)
  {
    
    
    form.value["ID_Hotel"]=this.id;

    this.serviceBack.AddChambre(form.value).then((data) =>{
    
      let x =data as any;
  if(x.Etat=="Valide")
  {
    this.serviceBack.GetChambres(this.id).then((data)=>{
      this.ListeOfChambres=data;
    });
    this.opensweetalert();
  }
  else 
  {
    alert("non valide");
  }

    });
    $('#modalChambres').modal('toggle'); 
   
  }


onUpdate()
{

  this.serviceBack.Update_Chambre(this.chambreForm.value).then((data)=>{
    $('#modalChambresUpdate').modal('toggle');
    this.serviceBack.GetChambres(this.id).then((data)=>{
      this.ListeOfChambres=data;
    });    
    this.opensweetalert();
      
      console.log("Promise resolved with Pays: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with Pays" + JSON.stringify(error));
    });
  
}


  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }

    Update(i)
    {

      this.serviceBack.GetChambre(i).then((data)=>{
       let x = data as any ;
       console.log(x);
       this.chambreForm= new FormGroup({
        Type_Chambre : new FormControl(x.Type_Chambre),
        Categorie : new FormControl(x.Categorie),
        Vue : new FormControl(x.Vue),
        Description : new FormControl(x.Description),
        Capacite_Min : new FormControl(x.Capacite_Min),
        Capacite_Max : new FormControl(x.Capacite_Max),
        Type_Vente : new FormControl(x.Type_Vente),
        ID_Chambre : new FormControl(x.ID_Chambre),
        ID_Hotel : new FormControl(x.ID_Hotel)
      });

      });

      

      $('#modalChambresUpdate').modal('toggle');
      
      
    
     
    }
  

    clone(i)
    {
      
      this.ListeOfChambres[i].ID_Hotel=this.id;
      this.ListeOfChambres[i].ID_Chambre=null;
     // console.log( this.ListeOfChambres[i]);
    this.serviceBack.Ajouter_Chambre_( this.ListeOfChambres[i]).then((data) =>{
    

      this.serviceBack.GetChambres(this.id).then((data)=>{
        this.ListeOfChambres=data;
      });
      this.opensweetalert();
    });
    }

    RemoveChambre(id:any)
    {
      
      this.serviceBack.RemoveChambre(id).then((data) =>{
    
        let x =data as any;
    if(x.Etat=="Valide")
    {
      this.serviceBack.GetChambres(this.id).then((data)=>{
        this.ListeOfChambres=data;
      });
      this.opensweetalert();
    }
    else 
    {
      alert("non valide");
    }
  
      });
    
    }

}
