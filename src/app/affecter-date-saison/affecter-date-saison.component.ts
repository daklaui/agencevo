import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TarifsComponent } from '../tarifs/tarifs.component';
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
  FormUpdateDetSa:FormGroup;

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
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    
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


  Update(i)
  {
  let x=  this.ListeDetSaison[i];
console.log(x);
const bDate: Date = new Date(new Date(x.date_debut).setDate(new Date(x.date_debut).getDate()+1));
const dDate: Date = new Date(new Date(x.date_fin).setDate(new Date(x.date_fin).getDate()+1));
console.log(bDate.toISOString().substring(0, 10));
    this.FormUpdateDetSa= new FormGroup({
      Date_Debut : new FormControl(bDate.toISOString().substring(0, 10)),
      Date_Fin : new FormControl(dDate.toISOString().substring(0, 10)),
      Id_Saison : new FormControl(x.Id_Saison),
      Id_Det_Saison : new FormControl(x.id_det_saison)
  
    });
    $('#UpdateDetS').modal('toggle'); 
  }
  onUpdate()
  {
    console.log(this.FormUpdateDetSa);
    this.serviceBack.Update_Det_S(this.FormUpdateDetSa.value).then(data=>{
      $('#UpdateDetS').modal('toggle'); 
      this.rerender();
      this.getDetSaison();
      this.opensweetalert();
    });
  }
  
}
