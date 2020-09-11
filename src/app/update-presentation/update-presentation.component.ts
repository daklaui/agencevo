import { Component, OnInit, Input } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
declare var $: any;
@Component({
  selector: 'app-update-presentation',
  templateUrl: './update-presentation.component.html',
  styleUrls: ['./update-presentation.component.css']
})
export class UpdatePresentationComponent implements OnInit {
  @Input() id: number ;

  
  IsAdd:boolean=true;
  IsUpdate:boolean=false;
  IsAddChild:boolean=false;
  ob:any;
  valactive:number;
  SousValActive:number;
 liste: any=[];
 One_Pre:any;
 
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
    this.serviceBack.GetPresentation(this.id).then((data)=>{
      this.liste=data;
    });
    this.SousValActive=null;
  }


 

  Pop_Add_Title()
  {
    this.ob=undefined;
    this.IsAdd=true;
  this.IsUpdate=false;
  this.IsAddChild=false;
    $('#demo-lg-modal').modal('show'); 
  }


  onOutput(x:any)
  {
if(x.id==undefined)
{
  x.Id_Hotel=this.id;
  /*this.serviceBack.AddPre(x).then((data)=>{
    //this.liste=data;
  });
  
  this.liste.push(x);
  console.log("test moataz"+this.liste);*/
  console.log(x);
}
else
{

  let pre=this.liste[x.id];
  pre.Titre=x.ob.Titre;
  pre.Text=x.ob.Text;
  pre.Id_Hotel=this.id;

  this.serviceBack.Update_Presentation(pre).then((data)=>{
   
  this.liste.splice(x.id,1,pre);
  });
  


  console.log(x);
  //console.log("test moataz update"+this.liste);
}
   
  }

  OnAddChild(x:any)
  {
    x.ob.Sous_Titres.Id_Hotel=this.id;
    x.ob.Sous_Titres.Id_Grand_Titre=x.ob.Id_Presentation;
 this.liste[x.id].Sous_Titres=x.ob.Sous_Titres;
    let pres = {
      "Id_Grand_Titre" : x.ob.Id_Presentation,
      "Id_Hotel" : this.id,
      "Text": x.ob.Sous_Titres[x.ob.Sous_Titres.length-1].Text,
      "Titre": x.ob.Sous_Titres[x.ob.Sous_Titres.length-1].Titre,
    }

this.serviceBack.Add_Pres_Soustitre(pres).then((data)=>{
  //this.liste=data;
});
 console.log(pres);
  }

  Update()
  {
    this.IsAdd=false;
    this.IsUpdate=true;
    this.IsAddChild=false;
    this.ob={
      "id":this.valactive,
      "ob":this.liste[this.valactive]
    };

    $('#demo-lg-modal').modal('show'); 
  }

  Add_TitreH2()
  {
    this.IsAdd=false;
    this.IsUpdate=false;
    this.IsAddChild=true;
    this.ob={
      "id":this.valactive,
      "ob":this.liste[this.valactive]
    };
    $('#demo-lg-modal').modal('show'); 
  }

  Remove()
  {
    if( this.SousValActive==null)
    {
      this.liste.splice(this.valactive, 1);
    }
    else{
      this.liste[this.valactive].Sous_Titres.splice(this.SousValActive, 1);
    }
 
  }
  
  onFinich()
  {
    return this.liste;
  }


  Opentext(i)
  {
    this.valactive=i;
    this.SousValActive=null;
    $("#editBtn").prop("disabled",false);
    $("#titreH2Btn").prop("disabled",false);
    $("#demo-nestable-logs").val(this.liste[i].Text);
  }
  OpenSoustext(i,j)
  {
    this.valactive=i;
    this.SousValActive=j;
    $("#editBtn").prop("disabled",true);
    $("#titreH2Btn").prop("disabled",true);
    $("#demo-nestable-logs").val(this.liste[i].Sous_Titres[j].Text);
  }

}
