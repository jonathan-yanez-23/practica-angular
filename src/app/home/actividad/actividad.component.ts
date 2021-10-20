import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {
  // Lista de requisitos
  listRequirements: string[];
  constructor() {
    this.listRequirements = ["Disponer de doble identidad", "Poderes especiales", "Pasado traumático", "Compañero de combate", "Archienemigo"]
  }

  ngOnInit(): void {
  }

}
