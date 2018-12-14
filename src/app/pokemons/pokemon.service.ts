import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonsUrl = environment.pokemonApiUrl + 'pokemons';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

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

  getTeam(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.cookieService.get('access_token')
      })
    };
    console.log('Bearer ' + this.cookieService.get('access_token'));
    return this.http.get<any>(environment.pokemonApiUrl + 'trainers/me/team', httpOptions);
  }

}
