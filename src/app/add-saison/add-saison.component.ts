import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $: any;
@Component({
  selector: 'app-add-saison',
  templateUrl: './add-saison.component.html',
  styleUrls: ['./add-saison.component.css']
})
export class AddSaisonComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
ListeSaison:any=[];
dtTrigger: Subject<any> = new Subject();

  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true,
      "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
        
    };
    this.GetDataFromDataBase();
  

  }
  opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }
  onSubmit(form: NgForm ) {
 
    this.serviceBack.AddSession(form.value).then((data)=>{
      this.rerender();
 this.GetDataFromDataBase();

      this.opensweetalert();
   //   this.GetDataFromDataBase();

    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  
  }

 GetDataFromDataBase()
{


  this.serviceBack.GetAllSession().then(data=>{
    this.ListeSaison= data;
    this.dtTrigger.next();
  });
 

}
rerender(): void {
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // Destroy the table first
    dtInstance.destroy();
  
  });
}
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}
  

}
