import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ajouter-titre-presentation',
  templateUrl: './ajouter-titre-presentation.component.html',
  styleUrls: ['./ajouter-titre-presentation.component.css']
})
export class AjouterTitrePresentationComponent implements OnInit {

@Input() Pre:Object;
@Output() onNameSelected=new EventEmitter();
  constructor() {   }

  ngOnInit() {
  alert(this.Pre);
    if(this.Pre!=undefined)
    {
console.log(this.Pre);
    }
  }
  onSubmit(form: NgForm ) {
    let x={
      "Titre":form.value["Titre"],
      "Text":form.value["TextTitre"],
      "Sous_Titres":[]
    }

   // console.log(this.ListeOfPre);
    this.onNameSelected.emit(x);
  }
  UpdateOb(v:number,x:string,y:string)
  {
    let b={
      "id":v,
      "Titre":x,
      "Text":y,
      "Sous_Titres":[]
    }
    console.log(b);
    this.onNameSelected.emit(b);
  }
}
