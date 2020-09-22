import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-update-supplement-sur-pension',
  templateUrl: './update-supplement-sur-pension.component.html',
  styleUrls: ['./update-supplement-sur-pension.component.css']
})
export class UpdateSupplementSurPensionComponent implements OnInit {
  @Input() id: number ;
  ListeSuppTarif:any=[];
  supplements = new FormArray([]);
  affiche=false;
  constructor(private  serviceBack:ServiceBackService ) { }

  ngOnInit() {
    this.serviceBack.GetPension_Supp(this.id).then(data=>{
      this.ListeSuppTarif=data;
     /* this.FormTarifDebase= new FormGroup({
        id_re : new FormControl(this.i),
        Pension_Base : new FormControl(this.x.Pension_Base),
        Groupe_Tarif : new FormControl(this.x.Groupe_Tarif),
        Id_Det_Session : new FormControl(this.x.Id_Det_Session),
        Id_Chambre : new FormControl(this.x.Id_Chambre),
        Type_Vente : new FormControl(this.x.Type_Vente),
        Min_Sejour : new FormControl(this.x.Min_Sejour),
        Prix_Achat : new FormControl(this.x.Prix_Achat),
        Prix_Vente : new FormControl(this.x.Prix_Vente)
       
      });*/

   /*for(let x of this.ListeSuppTarif)
     {
      this.supplements.push(
        new FormArray([new FormControl(x.Pension_Base),new FormControl(x.Prix_Vente),new FormControl(x.Prix_Achat)])
       )
     }
     console.log("test"+this.supplements.controls[0]);


    });/*/
  })
}
Update(a,b,etat)
{
   var prix_achat=$("#Prix_Achat"+b).val();
   var prix_vente=$("#Prix_Vente"+b).val();
  // alert(prix_achat+" "+prix_vente+" "+etat);

   let x ={
     "Prix_Achat":prix_achat,
     "Prix_Vente":prix_vente,
     "Etat_tarif":etat,
     "Id_Tarif":a
   }
 this.serviceBack.Update_Supp(x).then(data=>{
  this.affiche=true;
 });


}



}
