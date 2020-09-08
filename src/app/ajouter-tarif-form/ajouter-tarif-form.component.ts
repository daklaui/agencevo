import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import { OccupationComponent } from '../occupation/occupation.component';
import { SRChambreComponent } from '../s-r-chambre/s-r-chambre.component';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $: any;
@Component({
  selector: 'app-ajouter-tarif-form',
  templateUrl: './ajouter-tarif-form.component.html',
  styleUrls: ['./ajouter-tarif-form.component.css']
})
export class AjouterTarifFormComponent implements OnInit {
  @Input() id:number;
  @ViewChild(OccupationComponent, {static: false}) occupationComponent: OccupationComponent ; 
  @ViewChild(SRChambreComponent, {static: false}) SRChambreComponent: SRChambreComponent ; 
tarif:any={};
  ListePension:any=[];
  ListeSupptarif:any=[];
  ListeSaisonHotel:any=[];
  ListeTypeChambre:any=[];
  
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {

    this.WizarFn();
    this.AllListes();
  }
  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }

WizarFn()
{
  $('#demo-cls-wz').bootstrapWizard({
    tabClass		: 'wz-classic',
    nextSelector	: '.next',
    previousSelector	: '.previous',
    onTabClick: function(tab, navigation, index) {
        return false;
    },
    onInit : function(){
        $('#demo-cls-wz').find('.finishB').hide().prop('disabled', true);
    },
    onTabShow: function(tab, navigation, ind) {
        var $total1 = navigation.find('.li').length;
        var $current1 = ind+1;
        var $percent1 = ($current1/$total1) * 100;
        var wdt1 = 100/$total1;
        var lft = wdt1*ind;
        $('#demo-cls-wz').find('.progress-striped').find('.progress-bar').css({width:$percent1+'%'});

        // If it's the last tab then hide the last button and show the finish instead
        if($current1 >= $total1) {
            $('#demo-cls-wz').find('.next').hide();
            $('#demo-cls-wz').find('.finish').show();
            $('#demo-cls-wz').find('.finish').prop('disabled', false);
          
        } else {
            $('#demo-cls-wz').find('.next').show();
            $('#demo-cls-wz').find('.finish').hide().prop('disabled', true);
        }
    }
});

}

onSubmit(form: NgForm ) {
  form.value["Id_Hotel"]=this.id;
  this.tarif=form.value;
  }
onSubmit2() {
let v=[];
$("#supp tbody tr").each(function(){
let ob={
  "Type_Pension":$(this).find("td:eq(0)").text(),
  "Prix_Achat":$(this).find("td:eq(1) input").val(),
  "Prix_Vente":$(this).find("td:eq(2) input").val(),
  "Min_Sejour":$(this).find("td:eq(3) input").val()
};

v.push(ob);
});
//console.log(v);
this.ListeSupptarif=v;
  //his.ListeSupptarif=form.value;
  }
async AllListes()
{
  console.log(this.id);
  this.ListePension=await  this.serviceBack.GetPension();
  this.ListeSaisonHotel=await  this.serviceBack.GetSaisonHotel(this.id);
  this.ListeTypeChambre=await  this.serviceBack.GettypeChambre(this.id);
}



Ajouter_Tarif()
{
  $("#getForm").trigger('click');
  $("#getForm2").trigger('click');
 // this.tarif.Id_Hotel=this.id;

 let x = {
   "tarif":this.tarif,
   "Supplement":this.ListeSupptarif,
   "Supp_Red":this.occupationComponent.LsteDesSuppRed,
   "Supp_Red_Chambre":this.SRChambreComponent.LsteDesChamb
 }

 this.serviceBack.AddTarif(x).then(data=>{
let x = data as any;
this.opensweetalert();
 });

}


}

export interface Supplement
{
  Prix_Achat:number,
  Prix_Vente:number,
  Min_Sejour:number
}