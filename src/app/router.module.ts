/**
 * Created by Slvnm on 02/10/2018.
 */
/**
 * Created by A648067 on 11/09/2018.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {FormationPageComponent} from "./components/formation-page/formation-page.component";
import {CampusPageComponent} from "./components/campus-page/campus-page.component";
import {EntreprisePageComponent} from "./components/entreprise-page/entreprise-page.component";
import {ContactPageComponent} from './components/contact-page/contact-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'formations', component: FormationPageComponent},
  {path: 'campus', component: CampusPageComponent},
  {path: 'entreprises', component: EntreprisePageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})


export class AppRoutingModule {

}
