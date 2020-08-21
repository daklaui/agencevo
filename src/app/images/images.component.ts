import { Component, OnInit } from '@angular/core';
import { ServiceBackService } from '../service-back.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  files: File[] = [];
  constructor(private  serviceBack:ServiceBackService) { }

  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

   

    for (var i = 0; i < this.files.length; i++) { 
      const formData = new FormData();
      formData.append("Image", this.files[i]);
     this.serviceBack.uploadeImage(formData).then(res => {
      console.log(res);
      alert('Uploaded Successfully.');
   })
    
    }

   /* this.http.post('http://localhost:8001/upload.php', formData)
    .subscribe(res => {
       console.log(res);
       alert('Uploaded Successfully.');
    })*/
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}
}
