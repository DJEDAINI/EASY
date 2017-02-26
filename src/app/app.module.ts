import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {Routes , RouterModule} from '@angular/router'
import {AuthService} from "./providers/auth.service";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCP0F4865wYMN9Ng90tylB1B5Fobz7EQvw",
    authDomain: "easy-f6bfa.firebaseapp.com",
    databaseURL: "https://easy-f6bfa.firebaseio.com",
    storageBucket: "easy-f6bfa.appspot.com",
    messagingSenderId: "516699605433"

}

const routes : Routes = [
  {
    path : "",
    component : HomePageComponent
  } , 
  {
    path : "login" , 
    component : LoginPageComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
