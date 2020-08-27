import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.css']
})
export class OccupationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addOccupation()
 {
  $('#Occupation').modal();
 }
}
