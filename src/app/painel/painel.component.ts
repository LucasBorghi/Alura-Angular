import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
