import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  pokemons;
  selectedPokemon: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getTeam();
    // this.pokemons = [42, 12, 6, 20, 34, 2];
  }

  selectPokemon(id): void {
    this.selectedPokemon = id;
  }

  getTeam(): void {
    this.pokemonService.getTeam()
      .subscribe(team => this.pokemons = team);
  }

}
