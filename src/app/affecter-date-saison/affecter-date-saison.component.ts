import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-affecter-date-saison',
  templateUrl: './affecter-date-saison.component.html',
  styleUrls: ['./affecter-date-saison.component.css']
})
export class AffecterDateSaisonComponent implements OnInit {
  @Input() id:number;
  ListeSaison:any=[];
  ListeDetSaison:any=[];
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
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
    this.getSaison();
    this.getDetSaison();
    
    $('.datepicker').datepicker({
      format: 'd-M-yyyy'
  });

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

async getSaison()
{
  this.ListeSaison= await this.serviceBack.GetAllSession();
}

opensweetalert()
{
  Swal.fire({
      text: 'enregistrement a été effectué avec succès.',
      icon: 'success'
    });
  }


 getDetSaison()
{
 this.serviceBack.GetAllDetSaison(this.id).then(data=>{
  this.ListeDetSaison=data;
  this.dtTrigger.next();
 });
}


  onSubmit(form: NgForm ) {
    form.value["Id_Hotel"]=this.id;
    this.serviceBack.AddDeSaison(form.value).then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
      this.opensweetalert();
      this.getSaison();
      this.getDetSaison();
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
   
 this.getDetSaison();
  }

  toggelEtat(etat,i)
  {
          this.ListeDetSaison[i].Etat=etat;

          this.serviceBack.updateDetSaison( this.ListeDetSaison[i]).then((data)=>{
            console.log("Promise resolved with: " + JSON.stringify(data));
            this.opensweetalert();
            this.getSaison();
            this.getDetSaison();
          }).catch((error)=>{
            console.log("Promise rejected with " + JSON.stringify(error));
          });
  }
  
}
