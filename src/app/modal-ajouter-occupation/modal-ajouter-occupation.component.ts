import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-modal-ajouter-occupation',
  templateUrl: './modal-ajouter-occupation.component.html',
  styleUrls: ['./modal-ajouter-occupation.component.css']
})
export class ModalAjouterOccupationComponent implements OnInit {

   @Output() onNameSelected=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

    this.onNameSelected.emit(form.value);
    $('#Occupation').modal('toggle'); 
  }
}
