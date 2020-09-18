import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
declare var $: any;
@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
ListeDesChambres:any=[];
ListeCategorie:any=[];
ListeVue:any=[];
ListeType_Vente:any=[];
FormChambres:FormGroup;
  constructor(private  serviceBack:ServiceBackService) { }

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

 console.log(form.value);
  this.ListeDesChambres.push(form.value);
  $('#modalChambres').modal('toggle'); 
 

}

onSubmit1()
  {

    this.ListeDesChambres.splice(this.FormChambres.value["Id_Chambre"], 1);
    this.ListeDesChambres.push(this.FormChambres.value);
    $('#modalChambresUpdate').modal('toggle'); 
  }





  GetChambreslist()
  {
    return this.ListeDesChambres;
  }

  
  Update(i)
  {
    this.FormChambres=new FormGroup({
      Id_Chambre : new FormControl(i),
      ID_Hotel : new FormControl(),
      Type_Chambre : new FormControl(this.ListeDesChambres[i].Type_Chambre),
      Categorie : new FormControl(this.ListeDesChambres[i].Categorie),
      Vue : new FormControl(this.ListeDesChambres[i].Vue),
      Description : new FormControl(this.ListeDesChambres[i].Description),
      Capacite_Min : new FormControl(this.ListeDesChambres[i].Capacite_Min),
      Capacite_Max : new FormControl(this.ListeDesChambres[i].Capacite_Max),
      Type_Vente : new FormControl(this.ListeDesChambres[i].Type_Vente)
     
    });

    $('#modalChambresUpdate').modal('toggle'); 
   
  }


  clone(i)
  {
 
    this.ListeDesChambres.push(this.ListeDesChambres[i]);
    this.GetChambreslist();
  }

  remove(i)
  {
  
    this.ListeDesChambres.splice(i, 1);
    this.GetChambreslist();
  }
}
