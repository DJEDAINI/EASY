import { Component,Input, ElementRef, OnInit} from '@angular/core';
/// Le composant de l'enseignant
@Component({
  selector: 'prof',
  templateUrl: './prof.component.html',
  styleUrls:['./prof.component.css']
})
export class ProfComponent implements OnInit{
    @Input() enseignant:any; 
    constructor(){
       
    }
    ngOnInit(){
      console.log(this.enseignant)
       
    }

    changerEtat(){
     if(this.enseignant.show=="show"){
       this.enseignant.show="hide";
       this.enseignant.maj="hide";
     }
     else{
       if(this.enseignant.maj!="show-form")
          this.enseignant.show="show";
       }
     
    }
    modifier(){
      this.enseignant.maj="show-form";
      this.enseignant.show="hide";
      console.log(this.enseignant);
    }
}
