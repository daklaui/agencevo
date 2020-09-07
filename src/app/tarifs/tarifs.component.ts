import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.css']
})
export class TarifsComponent implements OnInit {
  @Input() id:number;
  
  constructor() { }

  ngOnInit() {
  }

}
