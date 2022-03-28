import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private HeroesService: HeroesService) { }

  ngOnInit(): void {

    this.HeroesService.getHeroes()
      .subscribe( heroes => {
        this.heroes = heroes;
      });
  }

}
