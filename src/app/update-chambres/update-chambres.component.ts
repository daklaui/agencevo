import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-update-chambres',
  templateUrl: './update-chambres.component.html',
  styleUrls: ['./update-chambres.component.css']
})
export class UpdateChambresComponent implements OnInit {
 ListeOfChambres:any=[];
 @Input() id:number;
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
this.serviceBack.GetChambres(this.id).then((data)=>{
  this.ListeOfChambres=data;
  console.log(this.ListeOfChambres);
});


  }

}
