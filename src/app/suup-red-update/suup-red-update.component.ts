import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-suup-red-update',
  templateUrl: './suup-red-update.component.html',
  styleUrls: ['./suup-red-update.component.css']
})
export class SuupRedUpdateComponent implements OnInit {
  @Input() id: number ;
  @Input() tarif: number ;
  constructor(private  serviceBack:ServiceBackService) { }
  LsteDesSuppRed:any=[];
  ngOnInit() {
    console.log(this.id);
    this.serviceBack.GetPension_Supp_red(this.id).then(data=>{
      this.LsteDesSuppRed=data;
    });
  }

  onSubmit(form: NgForm) {
    form.value["Id_Tarif"]=this.tarif;
 form.value
 this.serviceBack.Ajouter_SuppRed(form.value).then(data=>{});

  }
  Remove(i)
  {
    this.serviceBack.Remove_SuppRed(i).then(data=>{

      this.serviceBack.GetPension_Supp_red(this.id).then(data=>{
        this.LsteDesSuppRed=data;
      });
    });
   
  }
  
}
