import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pkmnList: JSON;
  fullListLoaded: boolean;
  searchText: String;
  selectedPokemonId: number;
  @Output() selectedPokemonChanged: EventEmitter<number> = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
    this.fullListLoaded = false;
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pkmnList => this.pkmnList = pkmnList['data']);
  }

  getPokemonsFull(): void {
    this.pokemonService.getPokemonsFull()
      .subscribe(pkmnList => this.pkmnList = pkmnList['data']);
  }

  onScroll() {
    console.log('scrolled!!');
    if (!this.fullListLoaded) {
      this.fullListLoaded = true;
      this.getPokemonsFull();
    }
  }

  selectPokemon(id) {
    this.selectedPokemonId = id;
    this.selectedPokemonChanged.emit(this.selectedPokemonId);
  }

}
