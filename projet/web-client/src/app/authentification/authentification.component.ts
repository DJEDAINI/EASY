import { Component,Input, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'authentification',
  templateUrl: './authentification.component.html',
  styleUrls:['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit{
    utilisateurConnecte: boolean=false ;


    constructor(){

    }
    connecter(){
      this.utilisateurConnecte=true;
    }
    ngOnInit(){

    }
}
