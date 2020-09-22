import { Component, OnInit, AfterViewInit, AfterContentChecked, ViewChild, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ServiceBackService } from '../service-back.service';
declare var $: any;
@Component({
  selector: 'app-liste-hotels',
  templateUrl: './liste-hotels.component.html',
  styleUrls: ['./liste-hotels.component.css']
})
export class ListeHotelsComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

ListeHotels:any=[];
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private  serviceBack:ServiceBackService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    this.dtTrigger.next();
  }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true,
      "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
        
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
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // Destroy the table first
    dtInstance.destroy();
    // Call the dtTrigger to rerender again
    this.dtTrigger.next();
  });
}
  
   

}
