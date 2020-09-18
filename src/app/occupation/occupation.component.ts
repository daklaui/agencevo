import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var $ :any;
@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.css']
})
export class OccupationComponent implements OnInit {
  LsteDesSuppRed:any=[];
  Suppred:FormGroup;
  constructor() { }

  ngOnInit() {

    
  }
  addOccupation()
 {
  $('#Occupation').modal();
 }

 
 onOutput(x:any)
 {

 this.LsteDesSuppRed.push(x);
 console.log("test moataz"+this.LsteDesSuppRed);

  
 }

 Remove(i)
 {
   
  this.LsteDesSuppRed.splice(i, 1);
  
 }

 onUpdate()
 {
  this.LsteDesSuppRed.splice( this.Suppred.value["id_re"], 1);
  this.LsteDesSuppRed.push(this.Suppred.value);
  $('#Update').modal('toggle');
 }

 Update(i)
 {
   let x =   this.LsteDesSuppRed[i];
  this.Suppred= new FormGroup({
    id_re : new FormControl(i),
    operation : new FormControl(x.operation),
    Prix_Achat : new FormControl(x.Prix_Achat),
    Prix_Vente : new FormControl(x.Prix_Vente),
    Type_Paiement : new FormControl(x.Type_Paiement),
    Nb_Adulte : new FormControl(x.Nb_Adulte),
    Nb_Enfant : new FormControl(x.Nb_Enfant),
    Applicable_Sur : new FormControl(x.Applicable_Sur),
    Age_Min : new FormControl(x.Age_Min),
    Age_Max : new FormControl(x.Age_Max),
    Applicable_Pour : new FormControl(x.Applicable_Pour)
  });
  $('#Update').modal();
 }
}
