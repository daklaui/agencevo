import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    
    switch( form.value["Capacite_Max"])
    {
     case 1 : form.value["Type_Chambre"]="Individuel";
     case 2 : form.value["Type_Chambre"]="Double";
     case 3 : form.value["Type_Chambre"]="Triple";
     case 4 : form.value["Type_Chambre"]="Quadruple";
    }
   
  
    this.ListeDesChambres.push(form.value);
    $('#modalChambres').modal('toggle'); 
   
  }

  GetChambreslist()
  {
    return this.ListeDesChambres;
  }
}
