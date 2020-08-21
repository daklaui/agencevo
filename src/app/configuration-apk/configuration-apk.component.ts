import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-configuration-apk',
  templateUrl: './configuration-apk.component.html',
  styleUrls: ['./configuration-apk.component.css']
})
export class ConfigurationAPKComponent implements OnInit {
Tr_Liste_Val :any =[];
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.GetListeValeur();
  }
  GetListeValeur()
  {
    this.serviceBack.Get_Config().then((data)=>{
      this.Tr_Liste_Val=data;
      console.log("Promise resolved with : " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with : " + JSON.stringify(error));
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
  //  this.opensweetalert();
    this.serviceBack.Ajouter_Config(form.value).then((data)=>{
      if(JSON.stringify(data).search("Valide"))
      {
        this.opensweetalert();
        this.GetListeValeur();
      }
      console.log("Promise resolved with : " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with : " + JSON.stringify(error));
    });
  }
  updateValeur(id:Number)
  {

  }
  deleteValeur(id:Number)
  {
    this.serviceBack.Delete_Config(id).then((data)=>{
      if(JSON.stringify(data).search("Valide"))
      {
        this.opensweetalert();
        this.GetListeValeur();
      }
      console.log("Promise resolved with : " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with : " + JSON.stringify(error));
    });
  }
}
