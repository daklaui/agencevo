import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuster-tarifs',
  templateUrl: './ajuster-tarifs.component.html',
  styleUrls: ['./ajuster-tarifs.component.css']
})
export class AjusterTarifsComponent implements OnInit {
  viewMode="";
  @Input() id: number ;
  constructor() { }

  ngOnInit() {
  }

}
