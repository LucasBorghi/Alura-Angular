import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fotos: Object =[];

  constructor(http: Http){
    this.fotos = http.get('v1/fotos');    
  }

}
