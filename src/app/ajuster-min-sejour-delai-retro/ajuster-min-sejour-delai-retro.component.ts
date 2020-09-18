import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';

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

  onSubmit(form: NgForm ) {

    form.value["Id_Hotel"]=this.id;
   // id
   this.serviceBack.Ajuster_Retro_MinSejour(form.value).then(data=>{
alert("c bon");
   });


  }
  
}
