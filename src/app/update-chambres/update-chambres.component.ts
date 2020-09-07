import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $: any;
@Component({
  selector: 'app-update-chambres',
  templateUrl: './update-chambres.component.html',
  styleUrls: ['./update-chambres.component.css']
})
export class UpdateChambresComponent implements OnInit {
 ListeOfChambres:any=[];
 @Input() id:number;
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
this.serviceBack.GetChambres(this.id).then((data)=>{
  this.ListeOfChambres=data;
  console.log(this.ListeOfChambres);
});


  }


  onSubmit(form:NgForm)
  {
    
    switch(form.value["Capacite_Max"])
    {
     case 1 : form.value["Type_Chambre"]="Individuel"; break;
     case 2 : form.value["Type_Chambre"]="Double"; break;
     case 3 : form.value["Type_Chambre"]="Triple"; break;
     case 4 : form.value["Type_Chambre"]="Quadruple"; break;
    }
    form.value["ID_Hotel"]=this.id;
    console.log(form.value);
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

  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
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
