import { Component, OnInit } from '@angular/core';
import { Heroe } from '../models/heroes.interface';
import { ApiheroesService } from '../services/apiheroes.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // COmo la API no ofrece paginacion de personajes, llamaremos todos de una sola vez
  heroes: Heroe[] = [];

  // Inyeccion de dependencia
  constructor(private apiheroesService: ApiheroesService) { }

  ngOnInit(): void {
    //Como se piden 25 personajes por pagina, se llamara 25 veces a la API.
    for(let i=1; i<=25; i++){
      this.apiheroesService.getCharactersById(i).
      subscribe((data: any)=>{
        const newHeroe: Heroe = {
          id: data.id,
          name: data.name,
          biography: JSON.stringify(data.biography),
          powerstats: JSON.stringify(data.powerstats),
          appearance: JSON.stringify(data.appearance),
          work: JSON.stringify(data.work),
          connections: JSON.stringify(data.connections),
          image: data.image.url
        };
        this.heroes.push(newHeroe);
      });
    }
    console.log(this.heroes)
  }

}
