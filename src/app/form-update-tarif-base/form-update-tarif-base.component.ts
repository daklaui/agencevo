import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
declare var $ :any;
@Component({
  selector: 'app-form-update-tarif-base',
  templateUrl: './form-update-tarif-base.component.html',
  styleUrls: ['./form-update-tarif-base.component.css']
})
export class FormUpdateTarifBaseComponent implements OnInit {
  FormTarifDebase:FormGroup;
  
  @Input() x : any;
  @Input() i : any;
  @Input() id: number ;
  ListeTarifs:any=[];
ListePension1:any=[];
ListeSaisonHotel:any=[];
ListeTypeChambre:any=[];
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.AllListes();
    this.FormTarifDebase= new FormGroup({
      id_re : new FormControl(this.i),
      Pension_Base : new FormControl(this.x.Pension_Base),
      Id_Tarif : new FormControl(this.x.Id_Tarif),
      Groupe_Tarif : new FormControl(this.x.Groupe_Tarif),
      Id_Det_Session : new FormControl(this.x.Id_Det_Session),
      Id_Chambre : new FormControl(this.x.Id_Chambre),
      Type_Vente : new FormControl(this.x.Type_Vente),
      Min_Sejour : new FormControl(this.x.Min_Sejour),
      Prix_Achat : new FormControl(this.x.Prix_Achat),
      Prix_Vente : new FormControl(this.x.Prix_Vente)
     
    });
    $('.selectpicker').selectpicker('refresh');
  }
  async AllListes()
  {
    console.log(this.id);
      
    this.ListePension1=await  this.serviceBack.GetPension();
    console.log(  this.ListePension1);
  this.ListeSaisonHotel=await  this.serviceBack.GetSaisonHotel(this.id);
  this.ListeTypeChambre=await  this.serviceBack.GettypeChambre(this.id);
  }

  onUpdate()
  {
    this.serviceBack.updatePensionBase( this.FormTarifDebase.value).then(data=>{});
  }
}
