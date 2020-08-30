import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import { RatingChangeEvent } from 'angular-star-rating';
declare var $: any;
@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {
  @Output() EquipementTable=new EventEmitter();
listeEquipement:any=[];
ListeEquipements:any[];
ListeRating=[];
@Input() id: number ;
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.GetEquipement().then((data)=>{
      this.listeEquipement=data;
      console.log("Promise resolved with: equipement " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with equipement " + JSON.stringify(error));
    });
    
  }
  eventCheck(){

    var tableControl = document.getElementById('Equi');

    var result = []
  
    $('input:checkbox:checked', tableControl).each(function() {
       let ob={
         "ID_Hotel":0,
         "ID_Equipement":$(this).closest('tr').find("td:eq(4) input").val(),
         "Note": $(this).closest('tr').find("td:eq(3) input").val()
       }
        result.push(ob);
        console.log(result);
      
});
return result;
}

onRatingChange = ($event: RatingChangeEvent,x) => {
    
  this.ListeRating[x]=$event.rating;
 
}
}
