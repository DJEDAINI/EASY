import { Component } from '@angular/core';
import { UserService } from "./services/user.service";
import { MdIconRegistry } from "@angular/material/icon/icon-registry";
import { DomSanitizer } from "@angular/platform-browser/src/security/dom_sanitization_service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
constructor(private iconRegistry: MdIconRegistry,
					  private userService: UserService,
						private sanitizer: DomSanitizer){
   this.iconRegistry.addSvgIcon('school',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/school.svg'));
   this.iconRegistry.addSvgIcon('person',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/person.svg'));
   this.iconRegistry.addSvgIcon('delete',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/delete.svg'));
    this.iconRegistry.addSvgIcon('edit',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/edit.svg'));
    this.iconRegistry.addSvgIcon('menu',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/menu.svg'));
    this.iconRegistry.addSvgIcon('book',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/books-stack.svg'));
    this.iconRegistry.addSvgIcon('teacher',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/teacher.svg'));
    this.iconRegistry.addSvgIcon('specialite',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/specialite.svg'));
    this.iconRegistry.addSvgIcon('add',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/add.svg'));
    this.iconRegistry.addSvgIcon('portrait',this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/portrait.svg'));
  }


  public authenticate(){
    this.userService.authenticate()
    .subscribe((obj) => {
      window.open(obj.url);

    })
  }
}
