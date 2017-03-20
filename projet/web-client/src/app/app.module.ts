import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule, Routes  } from '@angular/router';
import {MaterialModule, MdIcon, MdIconRegistry} from '@angular/material';

import { NgModule ,Injectable}      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { MaterialModule } from '@angular/material';
//import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//import { RouterModule }   from '@angular/router';
//import {MdIcon, MdIconRegistry} from '@angular/material';

import { AppComponent } from './app.component';
import { Oauth2Component } from './oauth2/oauth2.component';
import { UserService } from "./services/user.service";

import { GestionAnneeComponent } from './gestion-annee/gestion-annee.component';
import { ProfilComponent } from './profil/profil.component';
import { AnneeScolaireComponent } from './annee-scolaire/annee-scolaire.component';
import {  GroupeComponent } from './groupe/groupe.component';
import { MiseAJourEtudiantComponent } from './mise-a-jour-etudiant/mise-a-jour-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AuthentificationComponent } from './authentification/authentification.component';



import { MiseAJourEnseignantComponent } from './mise-a-jour-enseignant/mise-a-jour-enseignant.component';
import { MiseAJourProgrammeComponent } from './mise-a-jour-programme/mise-a-jour-programme.component';
import { ProfComponent } from './prof/prof.component';
import { ModuleComponent } from './module/module.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { ProgrammeComponent } from './programme/programme.component';
import { AppComponent }  from './app.component';

const routes : Routes = [
  {
    path:'Profil',
    component: ProfilComponent
  },
  {
    path:'AnneeScolaire',
    component: AnneeScolaireComponent
  },
  {
    path:'Etudiants',
    component: GroupeComponent
  },
  {
    path:'Enseignants',
    component: EnseignantComponent
  },
  {
    path:'Programmes',
    component: ProgrammeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
		GestionAnneeComponent,
		ProfilComponent,
		AnneeScolaireComponent,
		GroupeComponent,
		MiseAJourEtudiantComponent,
		EtudiantComponent,
    AuthentificationComponent,
    MiseAJourEnseignantComponent,
    MiseAJourProgrammeComponent,
    EnseignantComponent,
    ProgrammeComponent,
    ProfComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  providers: [UserService, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
