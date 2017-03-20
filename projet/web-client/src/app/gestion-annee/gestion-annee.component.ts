import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'gestion-annee',
  templateUrl: './gestion-annee.component.html',
  styleUrls:['./gestion-annee.component.css']
})
export class GestionAnneeComponent implements OnInit{
    nom:string="AIT AMRANE";
    prenom:string="Rachid";
    classMenus:string[]=["menu-non-selectionne","menu-selectionne","menu-non-selectionne","menu-non-selectionne","menu-non-selectionne"];

    constructor(){

    }
    ngOnInit(){

    }
    selectionner(i:number){
      this.classMenus=["menu-non-selectionne","menu-non-selectionne","menu-non-selectionne","menu-non-selectionne","menu-non-selectionne"];
      this.classMenus[i]="menu-selectionne";
      console.log(i);
      console.log(this.classMenus);
    }
}
