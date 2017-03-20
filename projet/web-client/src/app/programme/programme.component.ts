import { Component,Input, ElementRef, OnInit} from '@angular/core';
/// Le composant de l'enssemble des modules
@Component({
  selector: 'programme',
  templateUrl: './programme.component.html',
  styleUrls:['./programme.component.css']
})
export class ProgrammeComponent implements OnInit{
  annees:string[]=["2009/2010", "2010/2011", "2011/2012", "2013/2014", "2014/2015", "2015/2016", "2016/2017"];
  niveaux:string[]=["1CPI","2CPI","1CS","2CS-SIL","2CS-SIT","2CS-SIQ"];
  nouveauProgramme:any= {
    num:"",
    nom:"",
    abreviation:"",
    coefficient:"",
    description:"",
    volumeHoraire:"",
    show:"initial",
    maj:"initial"
  };
  programmes:any[]=[
    {
      num:"01",
      nom:"Théorie de programmation",
      abreviation:"THP",
      coefficient:"4",
      description:"Inteligence",
      volumeHoraire:"4",
      show:"initial",
      maj:"initial"
    },
    {
      num:"02",
      nom:"Algorithme",
      abreviation:"ALGO",
      coefficient:"4",
      description:"Inteligence",
      volumeHoraire:"4",
      show:"initial",
      maj:"initial"
    },
    {
      num:"03",
      nom:"Algébre 1",
      abreviation:"ALG1",
      coefficient:"4",
      description:"Inteligence",
      volumeHoraire:"4",
      show:"initial",
      maj:"initial"
    },
    {
      num:"04",
      nom:"Programation dynamique",
      abreviation:"TPGO",
      coefficient:"4",
      description:"Inteligence",
      volumeHoraire:"4",
      show:"initial",
      maj:"initial"
    }
  ]


  l: number;
  cpt: number;
  p: number;
  j: number;
  pre: boolean;
  numPage: number;

  constructor(){
    console.log(this.programmes);
    this.l = 0;
    this.cpt = 0;
    this.p = 1;
    this.pre = false;
    this.j = 11;
    this.numPage = 1;
  }
  ngOnInit(){

  }
  changerEtat(programme:any){
    if(this.programmes[this.programmes.indexOf(programme)].show=="show")
      this.programmes[this.programmes.indexOf(programme)].show="hide";
    else
      this.programmes[this.programmes.indexOf(programme)].show="show";
    console.log(this.programmes);
  }







  public changerTab(id: number, ide: string) {
    console.log(ide);
    /*var x;
     if (id == 1) {
     if (this.l < this.j && this.j > 5) {
     for (x = 0; x < this.j; x++) {
     ens.setAttribute('style', 'display: none');
     }
     if (this.pre && this.l != 0) {
     this.l += 5;
     }
     if (this.l == 0) {
     this.l = 5;
     }
     this.cpt = this.l + 5;
     while ((this.l < this.j) && (this.l < this.cpt)) {
     ens.setAttribute('style', 'visibility: visible');
     this.l++;
     }
     this.pre = false;
     this.p++;
     }
     } else if (id == 2) {

     if (this.l >= 5) {
     for (x = 0; x < this.j; x++) {
     ens.setAttribute('style', 'display: none');
     }
     if (this.cpt >= this.l && !this.pre) {
     this.l -= 5 - (this.cpt - this.l);
     }
     this.cpt = this.l - 5;
     while ((this.l > 0) && (this.l > this.cpt)) {
     ens.setAttribute('style', 'visibility: visible');
     this.l--;
     }
     this.pre = true;
     this.p--;
     }
     } else if (id == 3) {
     if (this.l > 5) {
     for (x = 0; x < this.j; x++) {
     ens.setAttribute('style', 'display: none');
     }
     this.l = 5;
     this.cpt = 0;
     while ((this.l > 0) && (this.l > this.cpt)) {
     ens.setAttribute('style', 'visibility: visible');
     this.l--;
     }
     this.pre = true;
     this.p = 1;
     }
     } else if (id == 4) {
     if (this.l < this.j) {
     for (x = 0; x < this.j; x++) {
     ens.setAttribute('style', 'display: none');
     }
     this.l = this.j - (this.j % 5);
     this.cpt = this.l + 5;
     while ((this.l < this.j) && (this.l < this.cpt)) {
     ens.setAttribute('style', 'visibility: visible');
     this.l++;
     }
     this.pre = false;
     this.p = Math.ceil(this.l / 5);
     }
     }
     this.numPage++;*/
  }
}
