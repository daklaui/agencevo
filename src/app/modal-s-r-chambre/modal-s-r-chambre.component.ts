import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-modal-s-r-chambre',
  templateUrl: './modal-s-r-chambre.component.html',
  styleUrls: ['./modal-s-r-chambre.component.css']
})
export class ModalSRChambreComponent implements OnInit {
  @Output() onNameSelected=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

    this.onNameSelected.emit(form.value);
    $('#ChambreSR').modal('toggle'); 
  }
}
