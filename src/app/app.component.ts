import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fotos: Object[] = [];

  constructor(http: Http) {

    http
      .get('http://localhost:3000/v1/fotos')
      .map(res => res.json())
      .subscribe(fotos => {
        this.fotos = fotos;
        console.log(this.fotos);
      }, 
      erro => console.log(erro));
  }

}
