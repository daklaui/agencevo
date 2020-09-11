import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-ajouter-titre-presentation',
  templateUrl: './ajouter-titre-presentation.component.html',
  styleUrls: ['./ajouter-titre-presentation.component.css']
})
export class AjouterTitrePresentationComponent implements OnInit {

@Input() Pre: any ;
@Output() onNameSelected=new EventEmitter();
  constructor() {   }

  ngOnInit() {
    if(this.Pre!=undefined)
    {
console.log(this.Pre);
    }
  }
  onSubmit(form: NgForm ) {
    let x={
      "Id_Hotel":0,
      "Titre":form.value["Titre"],
      "Text":form.value["TextTitre"],
      "Sous_Titres":[]
    }

   // console.log(this.ListeOfPre);
    this.onNameSelected.emit(x);
    $('#demo-lg-modal').modal('toggle'); 
  }
  UpdateOb(v:number,x:string,y:string)
  {
    this.Pre.ob.Titre=x;
    this.Pre.ob.Text=y;


    let b={
      "id":v,
      "Titre":x,
      "Text":y,
      "Sous_Titres":[]
    }
    console.log(this.Pre);
    this.onNameSelected.emit(this.Pre);
    $('#demo-lg-modal').modal('toggle'); 
  }
}
