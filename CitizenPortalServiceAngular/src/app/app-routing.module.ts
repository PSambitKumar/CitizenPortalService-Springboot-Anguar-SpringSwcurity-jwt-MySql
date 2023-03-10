import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {CountryComponent} from "./component/country/country.component";
import {StateComponent} from "./component/state/state.component";
import {DistrictComponent} from "./component/district/district.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'login', component: LoginComponent},
  { path: 'welcome', loadChildren: () => import('./component/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'country', component: CountryComponent},
  {path : 'state', component : StateComponent},
  {path : 'district', component : DistrictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
