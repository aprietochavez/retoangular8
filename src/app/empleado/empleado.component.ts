import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  id: String
  nombre: String
  cargo: String

  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("id");
    if (this.id == '1') {
      this.nombre == 'Alexander Prieto';
      this.cargo == 'Analista de Sistemas';
    }
    else {
      this.nombre == 'Delia Inga';
      this.cargo == 'Psicóloga';
    }
  }

}
