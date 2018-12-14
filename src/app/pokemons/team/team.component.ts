import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamPokemons: Array<Pokemon> = new Array<Pokemon>();
  selectedPokemon: String = new String;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getTeamIds();
    // this.pokemons = [42, 12, 6, 20, 34, 2];
  }

  selectPokemon(pkmn): void {
    this.selectedPokemon = pkmn;
  }

  getTeamIds(): void {
    this.pokemonService.getTeamIds()
      .subscribe(teamIds => this.getTeamPokemons(teamIds));
  }

  getTeamPokemons(teamIds): void {
    this.pokemonService.getTeamPokemons(teamIds)
      .subscribe(pokemons => {
        for (let pokemon of pokemons) {
          this.teamPokemons.push(pokemon);
        }
    });
  }

}
