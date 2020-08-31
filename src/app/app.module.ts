import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { AjouterHotelComponent } from './ajouter-hotel/ajouter-hotel.component';
import { StarRatingModule } from 'angular-star-rating';
import { ParametrageHotelComponent } from './parametrage-hotel/parametrage-hotel.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { FormulaireAddHotelComponent } from './formulaire-add-hotel/formulaire-add-hotel.component';
import { ImagesComponent } from './images/images.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { AddSaisonComponent } from './add-saison/add-saison.component';
import { AffecterDateSaisonComponent } from './affecter-date-saison/affecter-date-saison.component';
import { AjouterTarifComponent } from './ajouter-tarif/ajouter-tarif.component';
import { AjouterTarifFormComponent } from './ajouter-tarif-form/ajouter-tarif-form.component';
import { ConfigurationAPKComponent } from './configuration-apk/configuration-apk.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormAjouterHotelComponent } from './form-ajouter-hotel/form-ajouter-hotel.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AjouterTitrePresentationComponent } from './ajouter-titre-presentation/ajouter-titre-presentation.component';
import { ChambresComponent } from './chambres/chambres.component';
import { AddChildModalComponent } from './add-child-modal/add-child-modal.component';
import { LoginComponent } from './login/login.component';
import { OccupationComponent } from './occupation/occupation.component';
import { SRChambreComponent } from './s-r-chambre/s-r-chambre.component';
import { ModalAjouterOccupationComponent } from './modal-ajouter-occupation/modal-ajouter-occupation.component';
import { ModalSRChambreComponent } from './modal-s-r-chambre/modal-s-r-chambre.component';
import { ListeHotelsComponent } from './liste-hotels/liste-hotels.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { UpdatePresentationComponent } from './update-presentation/update-presentation.component';
import { UpdateEquipementsComponent } from './update-equipements/update-equipements.component';
import { UpdateChambresComponent } from './update-chambres/update-chambres.component';
import { NgSwitcheryModule } from "angular-switchery-ios";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    AjouterHotelComponent,
    ParametrageHotelComponent,
    EquipementsComponent,
    FormulaireAddHotelComponent,
    ImagesComponent,
    TarifsComponent,
    AddSaisonComponent,
    AffecterDateSaisonComponent,
    AjouterTarifComponent,
    AjouterTarifFormComponent,
    ConfigurationAPKComponent,
    FormAjouterHotelComponent,
    PresentationComponent,
    AjouterTitrePresentationComponent,
    ChambresComponent,
    AddChildModalComponent,
    LoginComponent,
    OccupationComponent,
    SRChambreComponent,
    ModalAjouterOccupationComponent,
    ModalSRChambreComponent,
    ListeHotelsComponent,
    UpdateHotelComponent,
    UpdatePresentationComponent,
    UpdateEquipementsComponent,
    UpdateChambresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  StarRatingModule.forRoot(),FormsModule,HttpClientModule,NgxDropzoneModule,NgSwitcheryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
