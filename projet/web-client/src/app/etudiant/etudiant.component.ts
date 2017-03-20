import { Component,Input, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls:['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
    @Input() etudiant:any;
    constructor(){

    }
    ngOnInit(){
      console.log(this.etudiant)

    }

    changerEtat(){
     if(this.etudiant.show=="show"){
       this.etudiant.show="hide";
       this.etudiant.maj="hide";
     }
     else{
       if(this.etudiant.maj!="show-form")
          this.etudiant.show="show";
       }

    }
    modifier(){
      this.etudiant.maj="show-form";
      this.etudiant.show="hide";
      console.log(this.etudiant);
    }
}
