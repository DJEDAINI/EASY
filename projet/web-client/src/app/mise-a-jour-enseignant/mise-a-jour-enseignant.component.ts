import { Component, OnInit,Input} from '@angular/core';
/// Le composant qui permet la modification de l'enseignant
@Component({
  selector: 'mise-a-jour-enseignant',
  templateUrl: './mise-a-jour-enseignant.component.html',
  styleUrls:['./mise-a-jour-enseignant.component.css']
})
export class MiseAJourEnseignantComponent implements OnInit{
   @Input() formClass:boolean;
    @Input() enseignant:any;
    constructor(){
    }
    ngOnInit(){


    }
    annuler(){
      console.log("on veut annuler");
      this.enseignant.maj="hide";
      console.log(this.enseignant);
    }

}
