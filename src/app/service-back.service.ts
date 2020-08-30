import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceBackService {

  constructor(private http:HttpClient) { 
  }
  
 
   GetListeCP()
  {
    return  this.http.get("http://localhost:54375/GetListeCP").toPromise();
  }
  GetListeChaineHotels()
  {
    return  this.http.get("http://localhost:54375/GetChaineHotels").toPromise();
  }
  GetListeTypeHotels()
  {
    return  this.http.get("http://localhost:54375/GetTypeHotel").toPromise();
  }
   Ajouter_Config(config:any)
  {
    return  this.http.post("http://localhost:54375/Configuration",config).toPromise();
  }
  Ajouter_Hotel(hotel:any)
  {
    return  this.http.post("http://localhost:54375/Ajouter_Hotel",hotel).toPromise();
  }
  Ajouter_Pre(pre:any)
  {
    return  this.http.post("http://localhost:54375/Ajouter_Presentation",pre).toPromise();
  }
  Ajouter_Equipement(equi:any)
  {
    return  this.http.post("http://localhost:54375/Ajouter_Equipement",equi).toPromise();
  }
  Ajouter_Chambre(chambre:any)
  {
    return  this.http.post("http://localhost:54375/Ajouter_Chambre",chambre).toPromise();
  }
   Get_Config()
  {
    return  this.http.get("http://localhost:54375/Configuration_Get").toPromise();
  }
  Get_Config_With_Id(id:Number)
  {
    return  this.http.get("http://localhost:54375/Configuration_Get/"+id).toPromise();
  }
  Update_Config(config:any)
  {
    return  this.http.put("http://localhost:54375/Configuration_Update",config).toPromise();
  }
  Update_Hotel(hotel:any)
  {
    return  this.http.put("http://localhost:54375/Update_Hotel",hotel).toPromise();
  }
  Delete_Config(id:Number)
  {
    return  this.http.delete("http://localhost:54375/Configuration_Delete/"+id).toPromise();
  }
  GetListeOffPays()
  {
    return  this.http.get("https://restcountries.eu/rest/v2/all").toPromise();
  }
  GetDevise(pay:String)
  {
    return  this.http.get("https://restcountries.eu/rest/v2/name/"+pay).toPromise();
  }
  GetHotelWithId(id:Number)
  {
    return  this.http.get("http://localhost:54375/GetHotel/"+id).toPromise();
  }
  GetEquipement()
  {
    return  this.http.get("http://localhost:54375/GetEquipement").toPromise();
  }
  GetCategorie()
  {
    return  this.http.get("http://localhost:54375/GetCategorie").toPromise();
  }
  GetVue()
  {
    return  this.http.get("http://localhost:54375/GetVue").toPromise();
  }
  GetTypeVente()
  {
    return  this.http.get("http://localhost:54375/GetTypeVente").toPromise();
  }
  uploadeImage(file:FormData)
  {
    return  this.http.post("http://localhost:54375/UploadePhoto",file).toPromise();
  }
}
