import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../models/heroes.interface';
import { ApiheroesService } from '../services/apiheroes.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  heroeId: string = '';
  heroeData: Heroe ;
  constructor(private route: ActivatedRoute, private apiheroesService: ApiheroesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.heroeId = '' + params.get('heroeId');
      this.apiheroesService.getCharactersById(Number(this.heroeId))
      .subscribe((data: any)=>{
        this.heroeData = {
          id: data.id,
          name: data.name,
          biography: JSON.stringify(data.biography),
          powerstats: JSON.stringify(data.powerstats),
          appearance: JSON.stringify(data.appearance),
          work: JSON.stringify(data.work),
          connections: JSON.stringify(data.connections),
          image: data.image.url
        };
      });
    });
  }

}
