import {Component, Input, OnInit, OnChanges} from '@angular/core';
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
  sound = new Audio();
  @Input() selectedPokemonId: number;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    // this.getPokemon();
  }

  ngOnChanges() {
    if (this.selectedPokemonId) {
      this.getPokemonById(this.selectedPokemonId);
      this.sound.src = '../assets/audio/' + this.selectedPokemonId + '.mp3';
      this.sound.load();
      this.sound.play();
    }
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(id)
      .subscribe(pokemon => this.pokemonInfos = pokemon);
  }

  getPokemonById(id: number): void {
    this.pokemonService.getPokemonById(id)
      .subscribe(pokemon => this.pokemonInfos = pokemon);
  }

  playSound(): void {
    if (this.sound) {
      this.sound.play();
    }
  }
}
