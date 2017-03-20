import { Component,Input, ElementRef, OnInit} from '@angular/core';
/// Le composant de l'enssemble des enseignants
@Component({
  selector: 'enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls:['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  niveaux:string[]=["1CPI","2CPI","1CS","2CS-SIL","2CS-SIT","2CS-SIQ"];
  modules:string[]=["Algo","SFSD","THP","TPGO"];
  groupes:string[]=["G01","G02","G03","G04","G05","G06","G07","G08"];
  nouveauEnseignant:any=
  { num:"",
    nom:"",
    prenom:"",
    email:"",
    adress:"",
    tel:"",
    show:"",
    maj:"initial"
  };
  enseignants:any[]=[
    {
      num:"01",
      nom:"ABC",
      prenom:"cde",
      email:"abc@esi.dz",
      adress:"adr",
      tel:"123456789",
      show:"initial",
      maj:"initial"
    },
    {
      num:"02",
      nom:"ABC",
      prenom:"cde",
      email:"abc@esi.dz",
      adress:"adr",
      tel:"123456789",
      show:"initial",
      maj:"initial"
    },
    {
      num:"03",
      nom:"ABC",
      prenom:"cde",
      email:"abc@esi.dz",
      adress:"adr",
      tel:"123456789",
      show:"initial",
      maj:"initial"
    },
    {
      num:"04",
      nom:"ABC",
      prenom:"cde",
      email:"abc@esi.dz",
      adress:"adr",
      tel:"123456789",
      show:"initial",
      maj:"initial"
    },
    {
      num:"05",
      nom:"ABC",
      prenom:"cde",
      email:"abc@esi.dz",
      adress:"adr",
      tel:"123456789",
      show:"initial",
      maj:"initial"
    },
    {
      num:"06",
      nom:"ABC",
      prenom:"cde",
      email:"abc@esi.dz",
      adress:"adr",
      tel:"123456789",
      show:"initial",
      maj:"initial"
    },
    {
      num:"07",
      nom:"ABC",
      prenom:"cde",
      email:"abc@esi.dz",
      adress:"adr",
      tel:"123456789",
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
    console.log(this.enseignants);
    this.l = 0;
    this.cpt = 0;
    this.p = 1;
    this.pre = false;
    this.j = 11;
    this.numPage = 1;
  }
  ngOnInit(){

  }
  changerEtat(enseignant:any){
    if(this.enseignants[this.enseignants.indexOf(enseignant)].show=="show")
      this.enseignants[this.enseignants.indexOf(enseignant)].show="hide";
    else
      this.enseignants[this.enseignants.indexOf(enseignant)].show="show";
    console.log(this.enseignants);
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
