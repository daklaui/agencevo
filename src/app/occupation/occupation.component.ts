import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.css']
})
export class OccupationComponent implements OnInit {
  LsteDesSuppRed:any=[];
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
}
