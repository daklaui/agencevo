import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ConfigurationAPKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
