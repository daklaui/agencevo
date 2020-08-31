import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {
  @Input() id:number;
  hotel:any={};
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.GetHotelWithId(this.id).then((data)=>{
      this.hotel=data;
    });
  }

}
