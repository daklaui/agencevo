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
 liste: any=[];
 One_Pre:any;
  constructor() { }

  ngOnInit() {
    
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

  Update(id:number)
  {
    this.IsAdd=false;
    this.IsUpdate=true;
    this.IsAddChild=false;
    this.ob={
      "id":id,
      "ob":this.liste[id]
    };

    $('#demo-lg-modal').modal('show'); 
  }

  Add_TitreH2(id:number)
  {
    this.IsAdd=false;
    this.IsUpdate=false;
    this.IsAddChild=true;
    this.ob={
      "id":id,
      "ob":this.liste[id]
    };
    $('#demo-lg-modal').modal('show'); 
  }
  Remove(id:number)
  {
    this.liste.splice(id, 1);
  }
  Remove1(id:number,id2:number)
  {
    this.liste[id].Sous_Titres.splice(id2, 1);
  }
  onFinich()
  {
    return this.liste;
  }
}
