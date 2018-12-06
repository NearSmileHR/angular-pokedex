import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemonInfos: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(id)
      .subscribe(pokemon => this.pokemonInfos = pokemon);
  }

}
