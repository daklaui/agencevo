import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterHotelComponent } from './ajouter-hotel/ajouter-hotel.component';
import { ParametrageHotelComponent } from './parametrage-hotel/parametrage-hotel.component';
import { ConfigurationAPKComponent } from './configuration-apk/configuration-apk.component';
import { LoginComponent } from './login/login.component';
import { ListeHotelsComponent } from './liste-hotels/liste-hotels.component';



const routes: Routes = [
  { path: 'Ajouter_Hotel', component:AjouterHotelComponent },
  { path: 'Hotel/:id', component:ParametrageHotelComponent },
  { path: 'configuration-apk', component:ConfigurationAPKComponent },
  { path: 'ListeHotels', component:ListeHotelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
