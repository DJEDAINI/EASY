import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'mise-a-jour-etudiant',
  templateUrl: './mise-a-jour-etudiant.component.html',
  styleUrls:['./mise-a-jour-etudiant.component.css']
})
export class MiseAJourEtudiantComponent implements OnInit{
   @Input() formClass:boolean;
    @Input() etudiant:any;
    constructor(){
    }
    ngOnInit(){


    }
    annuler(){
      console.log("on veut annuler");
      this.etudiant.maj="hide";
      console.log(this.etudiant);
      //this.cordinateurVuesService.annulerModification(this.etudiant);
    }

}
