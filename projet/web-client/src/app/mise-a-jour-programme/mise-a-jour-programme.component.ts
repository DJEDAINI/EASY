import { Component, OnInit,Input} from '@angular/core';
/// Le composant qui permet la modification du module
@Component({
  selector: 'mise-a-jour-programme',
  templateUrl: './mise-a-jour-programme.component.html',
  styleUrls:['./mise-a-jour-programme.component.css']
})
export class MiseAJourProgrammeComponent implements OnInit{
   @Input() formClass:boolean;
    @Input() programme:any;
    constructor(){
    }    
    ngOnInit(){
      
       
    }
    annuler(){
      console.log("on veut annuler");
      this.programme.maj="hide";
      console.log(this.programme);
    }
  
}
