import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
declare var $: any;
@Component({
  selector: 'app-liste-hotels',
  templateUrl: './liste-hotels.component.html',
  styleUrls: ['./liste-hotels.component.css']
})
export class ListeHotelsComponent implements OnInit {
ListeHotels:any=[];
dtOptions: DataTables.Settings = {};
  constructor(private  serviceBack:ServiceBackService) { }


  ngOnInit() {
    this.dtOptions = {
      createdRow: function(row, data, dataIndex){
        // Initialize custom control
        $('.form-control', row).raty({
           // ... skipped ...
        });
     },
      pagingType: 'full_numbers',
      pageLength: 5,
      "columnDefs": [ {
        "targets": 2,
        "orderable": false,
        "searchable": false
  } ]
    };
    this.getTable();
    /*this.serviceBack.GetListeHotels().then((data)=>{
      this.ListeHotels=data;
      console.log("Promise resolved with: equipement " + JSON.stringify(data));
   
    }).catch((error)=>{
      console.log("Promise rejected with equipement " + JSON.stringify(error));
    });*/
  }

async getTable()
{
  this.ListeHotels= await this.serviceBack.GetListeHotels();
}
  
   

}
