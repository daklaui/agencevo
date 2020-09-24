import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-ajuster-min-sejour-delai-retro',
  templateUrl: './ajuster-min-sejour-delai-retro.component.html',
  styleUrls: ['./ajuster-min-sejour-delai-retro.component.css']
})
export class AjusterMinSejourDelaiRetroComponent implements OnInit {
  @Input() id:Number;
  ListeDesSaison:any=[];
  constructor(private serviceBack:ServiceBackService) { }

  ngOnInit() {
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

    form.value["Id_Hotel"]=this.id;
   // id
   this.serviceBack.Ajuster_Retro_MinSejour(form.value).then(data=>{
    this.opensweetalert();
    form.reset();
   });


  }
  
}
