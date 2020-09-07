import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-affecter-date-saison',
  templateUrl: './affecter-date-saison.component.html',
  styleUrls: ['./affecter-date-saison.component.css']
})
export class AffecterDateSaisonComponent implements OnInit {
  @Input() id:number;
  ListeSaison:any=[];
  ListeDetSaison:any=[];
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.getSaison();
    this.getDetSaison();
    


  }


async getSaison()
{
  this.ListeSaison= await this.serviceBack.GetAllSession();
}

opensweetalert()
{
  Swal.fire({
      text: 'enregistrement a été effectué avec succès.',
      icon: 'success'
    });
  }


 getDetSaison()
{
 this.serviceBack.GetAllDetSaison(this.id).then(data=>{
  this.ListeDetSaison=data;
 });
}


  onSubmit(form: NgForm ) {
    form.value["Id_Hotel"]=this.id;
    this.serviceBack.AddDeSaison(form.value).then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
      this.opensweetalert();
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
   
 this.getDetSaison();
  }
}
