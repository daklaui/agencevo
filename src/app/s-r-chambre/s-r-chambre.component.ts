import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-s-r-chambre',
  templateUrl: './s-r-chambre.component.html',
  styleUrls: ['./s-r-chambre.component.css']
})
export class SRChambreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addRSChambre()
  {
    $('#ChambreSR').modal();
  }
}
