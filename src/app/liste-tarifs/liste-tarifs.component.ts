import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
declare var $ :any;
@Component({
  selector: 'app-liste-tarifs',
  templateUrl: './liste-tarifs.component.html',
  styleUrls: ['./liste-tarifs.component.css']
})
export class ListeTarifsComponent implements OnInit {
ListeTarifs:any=[];
ListePension1:any=[];
ListeSaisonHotel:any=[];
ListeTypeChambre:any=[];
FormTarifDebase:FormGroup;
@Input() id: number ;
@Input() id_tarif: number ;
viewMode="";
x:any;
i:any;
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
   // this.viewMode = 'tab1';
    this.AllListes();
    this.getListeTarifs();
  }
 
  
  async AllListes()
  {
    console.log(this.id);
      
    this.ListePension1=await  this.serviceBack.GetPension();
    console.log(  this.ListePension1);
  this.ListeSaisonHotel=await  this.serviceBack.GetSaisonHotel(this.id);
  this.ListeTypeChambre=await  this.serviceBack.GettypeChambre(this.id);
  }
  async getListeTarifs()
  {
    this.ListeTarifs= await this.serviceBack.GetListeTarifs(this.id);
  }
  onUpdate()
  {

  }
  Update(i)
  {
    this.i=i;
    this.x = this.ListeTarifs[i];
    this.id_tarif=this.x.Id_Tarif;
   this.FormTarifDebase= new FormGroup({
    id_re : new FormControl(i),
    Pension_Base : new FormControl(this.x.Pension_Base),
    Groupe_Tarif : new FormControl(this.x.Groupe_Tarif),
    Id_Det_Session : new FormControl(this.x.Id_Det_Session),
    Id_Chambre : new FormControl(this.x.Id_Chambre),
    Type_Vente : new FormControl(this.x.Type_Vente),
    Min_Sejour : new FormControl(this.x.Min_Sejour),
    Prix_Achat : new FormControl(this.x.Prix_Achat),
    Prix_Vente : new FormControl(this.x.Prix_Vente)
   
  });
 // $(".selectpicker").selectpicker('refresh');
  $('#UpdateTarif').modal();

  }


}
