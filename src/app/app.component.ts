import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact = {
    nom : 'OURID',
    prenom : 'Mohamed',
    email : 'mohamedourid@gmail.com'
  }
}
