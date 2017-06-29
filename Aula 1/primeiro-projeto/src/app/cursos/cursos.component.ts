import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listaDePessoas : String;
  pessoas : String[] = ['Joao', 'lucas','gabriel','pedro'];

  constructor() { 
    this.listaDePessoas = 'https://facebook.com';
  }

  ngOnInit() {
  }

}
