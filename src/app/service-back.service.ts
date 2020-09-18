import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceBackService {

  constructor(private http:HttpClient) { 
  }
  
 
   GetListeCP()
  {
    return  this.http.get(environment.apiUrl+"GetListeCP").toPromise();
  }
  GetListeChaineHotels()
  {
    return  this.http.get(+environment.apiUrl+"GetChaineHotels").toPromise();
  }
  GetListeTypeHotels()
  {
    return  this.http.get(environment.apiUrl+"GetTypeHotel").toPromise();
  }
   GetListeHotels()
  {
    return   this.http.get(environment.apiUrl+"GetAllHotels").toPromise();
  }
   Ajouter_Config(config:any)
  {
    return  this.http.post(environment.apiUrl+"Configuration",config).toPromise();
  }
  Ajouter_Hotel(hotel:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Hotel",hotel).toPromise();
  }
  Ajouter_Pre(pre:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Presentation",pre).toPromise();
  }

  Ajouter_Equipement(equi:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Equipement",equi).toPromise();
  }
  Ajouter_Chambre(chambre:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Chambre",chambre).toPromise();
  }
   Get_Config()
  {
    return  this.http.get(environment.apiUrl+"Configuration_Get").toPromise();
  }
  Get_Config_With_Id(id:Number)
  {
    return  this.http.get(environment.apiUrl+"Configuration_Get/"+id).toPromise();
  }
  Update_Config(config:any)
  {
    return  this.http.put(environment.apiUrl+"Configuration_Update",config).toPromise();
  }
  Update_Hotel(hotel:any)
  {
    return  this.http.put(environment.apiUrl+"Update_Hotel",hotel).toPromise();
  }
  Update_Presentation(presentation:any)
  {
    return  this.http.put(environment.apiUrl+"Update_Presentation",presentation).toPromise();
  }
  Delete_Config(id:Number)
  {
    return  this.http.delete(environment.apiUrl+"Configuration_Delete/"+id).toPromise();
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
    return  this.http.get(environment.apiUrl+"GetHotel/"+id).toPromise();
  }
  GetEquipement()
  {
    return  this.http.get(environment.apiUrl+"GetEquipement").toPromise();
  }
  GetCategorie()
  {
    return  this.http.get(environment.apiUrl+"GetCategorie").toPromise();
  }
  GetVue()
  {
    return  this.http.get(environment.apiUrl+"GetVue").toPromise();
  }
  GetTypeVente()
  {
    return  this.http.get(environment.apiUrl+"GetTypeVente").toPromise();
  }
  uploadeImage(file:FormData)
  {
    return  this.http.post(environment.apiUrl+"UploadePhoto",file).toPromise();
  }


  //Update
  GetChambres(id:number)
  {
    return  this.http.get(environment.apiUrl+"GetChambres/"+id).toPromise();
  }
  GetEquipementParHotel(id:number)
  {
    return  this.http.get(environment.apiUrl+"GetEquipementParHotel/"+id).toPromise();
  }
  GetPresentation(id:number)
  {
    return  this.http.get(environment.apiUrl+"GetPresentation/"+id).toPromise();
  }

  GetAllSession()
  {
    return  this.http.get(environment.apiUrl+"GetAllSession").toPromise();
  }

  AddSession(session:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Session",session).toPromise();
  }
  GetAllDetSaison(id:any)
  {
    return  this.http.get(environment.apiUrl+"GetAllDetSessionSession/"+id).toPromise();
  }
  GetPension()
  {
    return  this.http.get(environment.apiUrl+"GetPension").toPromise();
  }
  GetGroupe_Tarif()
  {
    return  this.http.get(environment.apiUrl+"GetGroupe_Tarif").toPromise();
  }
  GettypeChambre(x:any)
  {
    return  this.http.get(environment.apiUrl+"GettypeChambre/"+x).toPromise();
  }
  GetSaisonHotel(x:any)
  {
    return  this.http.get(environment.apiUrl+"GetSaisonHotel/"+x).toPromise();
  }
  GetChambre(x:any)
  {
    return  this.http.get(environment.apiUrl+"GetChambre/"+x).toPromise();
  }
  GetGetLesPhoto(x:any)
  {
    return  this.http.get(environment.apiUrl+"GetLesPhoto/"+x).toPromise();
  }
  GetLesChambresHotel(x:any)
  {
    return  this.http.get(environment.apiUrl+"GetLesChambresHotel/"+x).toPromise();
  }
  GetLesDetSHotel(x:any)
  {
    return  this.http.get(environment.apiUrl+"GetLesDetSHotel/"+x).toPromise();
  }
  getListeChambresTarif(x:any)
  {
    return  this.http.post(environment.apiUrl+"getListeChambresTarif",x).toPromise();
  }

  AddDeSaison(session:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Det_Session",session).toPromise();
  }
  AddTarif(tarif:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_tarif",tarif).toPromise();
  }
  AddChambre(chambre:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Chambre_Mod",chambre).toPromise();
  }
  AddPhoto(photo:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Photo",photo).toPromise();
  }

  RemoveChambre(id:any)
  {
    return  this.http.delete(environment.apiUrl+"Remove_Chambre_Mod/"+id).toPromise();
  }

  AddPre(pre:any)
  {
    return  this.http.post(environment.apiUrl+"Add_Pres",pre).toPromise();
  }
  Ajouter_Chambre_(pre:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_Chambre_single",pre).toPromise();
  }
  Add_Pres_Soustitre(pre:any)
  {
    return  this.http.post(environment.apiUrl+"Add_Pres_Soustitre",pre).toPromise();
  }

  Update_equipement(eq:any)
  {
    return  this.http.post(environment.apiUrl+"Update_equipement",eq).toPromise();
  }
  Ajouter_SuppRed(SuppRed:any)
  {
    return  this.http.post(environment.apiUrl+"Ajouter_SuppRed",SuppRed).toPromise();
  }
  AjouterSupRedChambre(SuppRed:any)
  {
    return  this.http.post(environment.apiUrl+"AjouterSupRedChambre",SuppRed).toPromise();
  }
  Update_Chambre(chambre:any)
  {
    return  this.http.put(environment.apiUrl+"Update_Chambre",chambre).toPromise();
  }
  Ajuster_Retro_MinSejour(chambre:any)
  {
    return  this.http.put(environment.apiUrl+"Ajuster_Retro_MinSejour",chambre).toPromise();
  }

  updateDetSaison(DetSaison:any)
  {
    return  this.http.put(environment.apiUrl+"updateDetSaison",DetSaison).toPromise();
  }
  AjusterTarif(ajusterTarif:any)
  {
    return  this.http.put(environment.apiUrl+"AjusterTarif",ajusterTarif).toPromise();
  }
  Update_Supp(tarif:any)
  {
    return  this.http.put(environment.apiUrl+"Update_Supp",tarif).toPromise();
  }
  updatePensionBase(tarif:any)
  {
    return  this.http.put(environment.apiUrl+"updatePensionBase",tarif).toPromise();
  }
  GetListeTarifs(id:any)
  {
    return  this.http.get(environment.apiUrl+"GetListeTarifs/"+id).toPromise();
  }
  GetPension_Supp(id:any)
  {
    return  this.http.get(environment.apiUrl+"GetPension_Supp/"+id).toPromise();
  }
  GetPension_Supp_red(id:any)
  {
    return  this.http.get(environment.apiUrl+"Get_Supp_red/"+id).toPromise();
  }
  Get_Supp_red_Chambre(id:any)
  {
    return  this.http.get(environment.apiUrl+"Get_Supp_red_Chambre/"+id).toPromise();
  }
  Remove_SuppRed(id:any)
  {
    return  this.http.delete(environment.apiUrl+"Remove_SuppRed/"+id).toPromise();
  }
  
}
