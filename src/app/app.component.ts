import { Component } from '@angular/core';


import {Router} from '@angular/router'

import {AuthService} from './providers/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private isLogged  : Boolean ;
  private user_Name : String ;
  private user_Email : String ; 
    constructor(public authservice : AuthService , private router : Router){
      this.authservice.af.auth.subscribe(
        (auth) => {
          if (auth == null){
            // not logged in 
            this.isLogged = false ;
            this.user_Name = "";
            this.user_Email = "";

            this.router.navigate(['login']);     
          } else {
            //logged in
            this.isLogged = true ;
            this.user_Name = auth.google.displayName;
            this.user_Email = auth.google.email;
            this.router.navigate(['']);
            
          }
        }
      )
  }
}
