import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-update-supp-red-chambre',
  templateUrl: './update-supp-red-chambre.component.html',
  styleUrls: ['./update-supp-red-chambre.component.css']
})
export class UpdateSuppRedChambreComponent implements OnInit {
  LsteDesChamb:any=[];
  @Input() id : Number;
  @Input() tarif : Number;
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.Get_Supp_red_Chambre(this.id).then(data=>{this.LsteDesChamb=data});
  }
  onSubmit(form: NgForm) {
    form.value["Id_Tarif"]=this.tarif;
    this.serviceBack.AjouterSupRedChambre(form.value).then(data=>{});
    
  }
}
