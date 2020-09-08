import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import { NgForm } from '@angular/forms';
declare var $ :any;
@Component({
  selector: 'app-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.css']
})
export class SimulateurComponent implements OnInit {
  @Input() id:number;
  ListeTarif:any=[];
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
$("#nbEnfant").blur(function() {
  $("#LesSelects").empty();

for(let x=0;x<$("#nbEnfant").val();x++)
{
  $("#LesSelects").append(function() {
    return $("<select class='form-group col-lg-3 form-control ' name='age"+x+"'>")
        .append("<option value='2'>2</option>")
        .append("<option value='3'>3</option>")
        .append("<option value='4'>4</option>")
        .append("<option value='5'>5</option>")
        .append("<option value='6'>6</option>")
        .append("<option value='7'>7</option>")
        .append("<option value='8'>8</option>")
        .append("<option value='9'>9</option>")
        .append("<option value='10'>10</option>")
        .append("<option value='11'>11</option>");
});
}


});




  }

  onSubmit(form:NgForm)
{
console.log($('select[name="age0"] option:selected').val());
let min = Number($('select[name="age0"] option:selected').val());
let max =Number($('select[name="age0"] option:selected').val());
for(let i=1;i<form.value["nbEnfant"];i++)
{
  if(min>Number($('select[name="age'+i+'"] option:selected').val()))
  {
    min=Number($('select[name="age'+i+'"] option:selected').val());
  }
{
  if(max<Number($('select[name="age'+i+'"] option:selected').val()))
  {
    max=Number($('select[name="age'+i+'"] option:selected').val());
  }
}
}
form.value["id_hotel"]=this.id;
form.value["cap"]=(Number(form.value["nbEnfant"])+Number(form.value["nbAdulte"]));
form.value["ageMin"]=min;
form.value["agemax"]=max;
console.log(form.value);

  this.serviceBack.getListeChambresTarif(form.value).then(data=>{
    this.ListeTarif=data;
console.log(data);
  });
}




}
