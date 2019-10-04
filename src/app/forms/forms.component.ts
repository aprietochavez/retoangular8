import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  nombre: String;
  title = 'Componente Forms';

  ngOnInit() {
  }

  getMensaje(e){
    this.nombre = e;

  }
}
