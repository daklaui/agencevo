import { Component, OnInit, Input, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ServiceBackService } from '../service-back.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
declare var $ :any;
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit  {
  files: File[] = [];
  ListePhoto:any=[];
  @Input() id: number ;
  constructor(private  serviceBack:ServiceBackService,     private _sanitizer: DomSanitizer) {
    
    

  }


  ngOnInit() {
   
    this.GetImages();
   // let  api = $("#demo-gallery").unitegallery();
  //  console.log(	api.getNumItems()	);

  }
  
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);


   /* this.http.post('http://localhost:8001/upload.php', formData)
    .subscribe(res => {
       console.log(res);
       alert('Uploaded Successfully.');
    })*/
}

async GetImages()
{ 
  this.ListePhoto= await this.serviceBack.GetGetLesPhoto(this.id);
  console.log(this.ListePhoto);

}
opensweetalert()
  {
    Swal.fire({
        text: 'enregistrement a été effectué avec succès.',
        icon: 'success'
      });
    }
test()
{
  let  api = $("#demo-gallery").unitegallery();
  console.log(	api.getNumItems()	);
}
    sanitizeImg(x:any):SafeUrl
    {
      return +this._sanitizer.bypassSecurityTrustUrl(x);
    }
Upload()
{
  for (var i = 0; i < this.files.length; i++) { 
    const formData = new FormData();
    formData.append("Image", this.files[i]);
   this.serviceBack.uploadeImage(formData).then(res => {
     let x = res as any ;

     let ph = {
       "ID_Hotel":this.id,
       "Nom_Photo":x.Etat,
       "Lien_Photo":x.Statut
     }
     this.serviceBack.AddPhoto(ph).then(res => {
    
    
  })
 });
 this.opensweetalert();
  }
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}
}
