import { Component,Input, ElementRef, OnInit} from '@angular/core';
/// Le composant du module
@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls:['./module.component.css']
})
export class ModuleComponent implements OnInit{
    @Input() programme:any;
    constructor(){

    }
    ngOnInit(){
      console.log(this.programme)

    }

    changerEtat(){
     if(this.programme.show=="show"){
       this.programme.show="hide";
       this.programme.maj="hide";
     }
     else{
       if(this.programme.maj!="show-form")
          this.programme.show="show";
       }

    }
    modifier(){
      this.programme.maj="show-form";
      this.programme.show="hide";
      console.log(this.programme);
    }
}
