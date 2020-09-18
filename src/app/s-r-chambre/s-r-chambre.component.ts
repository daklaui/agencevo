import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var $ :any;
@Component({
  selector: 'app-s-r-chambre',
  templateUrl: './s-r-chambre.component.html',
  styleUrls: ['./s-r-chambre.component.css']
})
export class SRChambreComponent implements OnInit {
  LsteDesChamb:any=[];
  SuppredCh:FormGroup;
  constructor() { }

  ngOnInit() {
  }
  addRSChambre()
  {
    $('#ChambreSR').modal();
  }
  
 onOutput(x:any)
 {

 this.LsteDesChamb.push(x);
 console.log("test moataz"+x);

  
 }
 onUpdate()
 {
  this.LsteDesChamb.splice( this.SuppredCh.value["id_red_ch"], 1);
  this.LsteDesChamb.push(this.SuppredCh.value);
  $('#UpdateChambreSR').modal('toggle');
 }
 Update(i)
 {
  let x =   this.LsteDesChamb[i];
  console.log(this.LsteDesChamb[i]);
  this.SuppredCh= new FormGroup({
    id_red_ch : new FormControl(i),
    operation : new FormControl(x.operation),
    Prix_Achat : new FormControl(x.Prix_Achat),
    Prix_Vente : new FormControl(x.Prix_Vente),
    Type_Paiement : new FormControl(x.Type_Paiement),
    Note : new FormControl(x.Note),
  
  });
  $('#UpdateChambreSR').modal();
 }

 Remove(i)
 {
  this.LsteDesChamb.splice(i,1);
 }
}
