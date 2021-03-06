import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-ajuster-prix-vente-p',
  templateUrl: './ajuster-prix-vente-p.component.html',
  styleUrls: ['./ajuster-prix-vente-p.component.css']
})
export class AjusterPrixVentePComponent implements OnInit {
@Input() id:Number;
  constructor(private serviceBack:ServiceBackService) { }
  ListeDesChambres:any=[];
  ListeDesSaison:any=[];
  ngOnInit() {
    this.serviceBack.GetLesChambresHotel(this.id).then(data=>{
      this.ListeDesChambres=data;
    });
    
    this.serviceBack.GetLesDetSHotel(this.id).then(data=>{
      this.ListeDesSaison=data;
    });
  }
  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }
  onSubmit(form: NgForm ) {
    if(form.value["Appliquer"]=="")
    {
      form.value["Appliquer"]=false;
    }
    form.value["Id_Hotel"]=this.id;
   // id
   this.serviceBack.AjusterTarif(form.value).then(data=>{
    this.opensweetalert();
    form.reset();
   });


  }
}
