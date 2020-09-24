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
    
    this.serviceBack.GetEquipement().then(data=>{
      this.listeEquipement=data;
    });

              
  }
  eventCheck(){

    var tableControl = document.getElementById('Equi');

    var result = []
  
    $('input:checkbox:checked', tableControl).each(function() {
       let ob={
         "ID_Hotel":null,
         "Equipement": $(this).closest('tr').find("td:eq(3) input").val(),
         "ID_Equipement_Tr_ListVal":$(this).closest('tr').find("td:eq(2) input").val()
      //   "Note": $(this).closest('tr').find("td:eq(3) input").val()
       }
        result.push(ob);
       // console.log(result);
      
});
return result;
}

onRatingChange = ($event: RatingChangeEvent,x) => {
    
  this.ListeRating[x]=$event.rating;
 
}
}
