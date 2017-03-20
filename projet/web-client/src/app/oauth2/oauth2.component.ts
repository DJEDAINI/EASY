import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css']
})
export class Oauth2Component implements OnInit {

  constructor(private userService :UserService) {
    let code = window.location.search.split('=')[1];
    this.userService.getTokens(code).subscribe( 
      (tokens) => {
                  console.log(tokens);
                  } 
    );
  }

  ngOnInit() {
  }

}
