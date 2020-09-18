import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBackService } from '../service-back.service';
import{ImagesComponent}from '../images/images.component';
@Component({
  selector: 'app-parametrage-hotel',
  templateUrl: './parametrage-hotel.component.html',
  styleUrls: ['./parametrage-hotel.component.css']
})
export class ParametrageHotelComponent implements OnInit {
  id:number=0;
  @ViewChild(ImagesComponent, {static: false}) images: ImagesComponent ; 
  constructor(private route: ActivatedRoute,private  serviceBack:ServiceBackService ) { }

  ngOnInit() {
    this.id=+this.route.snapshot.paramMap.get("id");
  }
  refrech()
  {
    this.images.test();
  }
}
