import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonsUrl = environment.pokemonApiUrl + 'pokemons';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<JSON> {
    console.log(this.pokemonsUrl);
    return this.http.get<JSON>(this.pokemonsUrl);
  }

  getPokemonsFull(): Observable<JSON> {
    console.log(this.pokemonsUrl);
    return this.http.get<JSON>(this.pokemonsUrl + '?offset=0&limit=151');
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(environment.pokemonApiUrl + 'pokemons/' + id);
  }
}
