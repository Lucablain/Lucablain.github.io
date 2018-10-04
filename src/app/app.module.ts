import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {DataService} from "./services/dataService";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CampusPageComponent } from './components/campus-page/campus-page.component';
import { FormationPageComponent } from './components/formation-page/formation-page.component';
import { EntreprisePageComponent } from './components/entreprise-page/entreprise-page.component';
import {AppRoutingModule} from "./router.module";
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {MapDashComponent} from "./components/map-dash/map-dash.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HomePageComponent,
    CampusPageComponent,
    FormationPageComponent,
    EntreprisePageComponent,
    ContactPageComponent,
    MapDashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
