import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-child-modal',
  templateUrl: './add-child-modal.component.html',
  styleUrls: ['./add-child-modal.component.css']
})
export class AddChildModalComponent implements OnInit {
  @Input() Object:Object;
  @Output() onNameSelected=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm ) {
    let x=this.Object as any;
    
    let b={
      "Titre":form.value["Titre"],
      "Text":form.value["TextTitre"]
   
    }
    x.ob.Sous_Titres.push(b);

    console.log(x);
    this.onNameSelected.emit(x);
  
  }
}
