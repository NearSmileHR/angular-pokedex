import {Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pkmnList: Array<Pokemon> = new Array<Pokemon>();
  fullListLoaded: boolean;
  offset: number;
  limit: number;
  searchText: String;
  selectedPokemonId: number;
  @Output() selectedPokemonChanged: EventEmitter<number> = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.offset = 0;
    this.limit = 10;
    this.searchText = '';
    this.getPokemons();
    this.fullListLoaded = false;
  }

  checkListSize() {
    if (!this.fullListLoaded) {
      this.getPokemonsFull();
      this.fullListLoaded = true;
    }
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pkmnList => this.pkmnList = pkmnList['data']);
  }

  getPokemonsNext(): void {
      this.offset += this.limit;
      this.fullListLoaded = (this.offset > 151);

      this.pokemonService.getPokemonsWithParams(this.offset, this.limit)
        .subscribe(pkmnList => {
          for (let pkmn of pkmnList['data']) {
            this.pkmnList.push(pkmn);
          }
        });
  }

  getPokemonsFull(): void {
    this.pokemonService.getPokemonsFull()
      .subscribe(pkmnList => this.pkmnList = pkmnList['data']);
  }

  onScroll() {
    console.log('scrolled!!');
    if (!this.fullListLoaded) {
      this.getPokemonsNext();
    }
  }

  selectPokemon(id) {
    this.selectedPokemonId = id;
    this.selectedPokemonChanged.emit(this.selectedPokemonId);
  }

}
