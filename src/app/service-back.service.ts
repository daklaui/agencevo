import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceBackService {

  constructor(private http:HttpClient) { 
  }
  
 
  async GetListeCP():Promise<any>
  {
   console.log("test");
    return await this.http.get("https://127.0.0.1:44371/GetListeCP").toPromise();
  }
}
