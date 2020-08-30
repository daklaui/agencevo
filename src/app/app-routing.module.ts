import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterHotelComponent } from './ajouter-hotel/ajouter-hotel.component';
import { ParametrageHotelComponent } from './parametrage-hotel/parametrage-hotel.component';
import { ConfigurationAPKComponent } from './configuration-apk/configuration-apk.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'Ajouter_Hotel', component:AjouterHotelComponent },
  { path: 'Hotel/:id', component:ParametrageHotelComponent },
  { path: 'configuration-apk', component:ConfigurationAPKComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
