import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  IsAdd:boolean=true;
  IsUpdate:boolean=false;
  IsAddChild:boolean=false;
  ob:any;
  valactive:number;
  SousValActive:number;
 liste: any=[];
 One_Pre:any;
  constructor() { }

  ngOnInit() {
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
  this.liste.push(x);
  console.log("test moataz"+this.liste);
}
else
{
  this.liste[x.id].Titre=x.Titre;
  this.liste[x.id].Text=x.Text;
  console.log("test moataz update"+this.liste);
}
   
  }

  OnAddChild(x:any)
  {
 this.liste[x.id].Sous_Titres=x.ob.Sous_Titres;
 console.log("test moataz child"+this.liste[x.id].Sous_Titres);
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
