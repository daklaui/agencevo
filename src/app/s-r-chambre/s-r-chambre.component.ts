import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-s-r-chambre',
  templateUrl: './s-r-chambre.component.html',
  styleUrls: ['./s-r-chambre.component.css']
})
export class SRChambreComponent implements OnInit {
  LsteDesChamb:any=[];
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
}
