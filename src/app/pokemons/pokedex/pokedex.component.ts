import { Component, Input, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemonId: number;
  newPkmn: Pokemon;

  constructor() { }

  ngOnInit() {
  }

  selectedPokemonChanged(id: number) {
    this.pokemonId = id;
  }

  pokemonAdded(pkmn: Pokemon) {
    this.newPkmn = pkmn;
  }

}
