import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemonId: number;

  constructor() { }

  ngOnInit() {
  }

  selectedPokemonChanged(id: number) {
    this.pokemonId = id;
  }

}
