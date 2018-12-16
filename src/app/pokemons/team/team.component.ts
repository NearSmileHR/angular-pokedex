import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges {
  teamPokemons: Array<Pokemon> = new Array<Pokemon>();
  selectedPokemon: String = '';
  @Input() newPokemonAdded: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getTeamIds();
    // this.pokemons = [42, 12, 6, 20, 34, 2];
  }

  ngOnChanges() {
    if (this.newPokemonAdded) {
      if (this.teamPokemons.length < 6) {
        this.teamPokemons.push(this.newPokemonAdded);
        this.newPokemonAdded = null;
      }
    }
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
        this.teamPokemons = [];
        for (let pokemon of pokemons) {
          this.teamPokemons.push(pokemon);
        }
    });
  }

  delete(pokemon): void {
    const index = this.teamPokemons.indexOf(pokemon, 0);
    if (index > -1) {
      this.teamPokemons.splice(index, 1);
      this.selectedPokemon = '';
    }
  }

  updateTeam(): void {
    this.pokemonService.updateTeam(this.teamPokemons)
      .subscribe(result => console.log('Team updated!'));
  }

}
