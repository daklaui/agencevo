import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-equipements',
  templateUrl: './update-equipements.component.html',
  styleUrls: ['./update-equipements.component.css']
})
export class UpdateEquipementsComponent implements OnInit {
  @Input() id: number ;
  constructor() { }

  ngOnInit() {
  }

}
