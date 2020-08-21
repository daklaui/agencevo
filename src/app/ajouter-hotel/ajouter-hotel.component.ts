import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RatingChangeEvent } from 'angular-star-rating';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-ajouter-hotel',
  templateUrl: './ajouter-hotel.component.html',
  styleUrls: ['./ajouter-hotel.component.css'],
  providers:[ServiceBackService]
})
export class AjouterHotelComponent implements OnInit {
  onRatingChangeResult: RatingChangeEvent;
  constructor(private  serviceBack:ServiceBackService ) { }

   ngOnInit() {
    this.serviceBack.GetListeCP().then(data=>{
      console.log(data);
    });
  }
  onRatingChange = ($event: RatingChangeEvent) => {
    
    console.log();
    console.log('onRatingUpdated $event: ', $event.rating);
    this.onRatingChangeResult = $event;
  }
  onSubmit(form: NgForm ) {
    form.value["Categorie"]=this.onRatingChangeResult.rating;
    
  console.log(form.value);
  }
}
