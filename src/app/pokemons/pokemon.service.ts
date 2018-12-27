import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie';
import { forkJoin } from 'rxjs';

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

  getPokemonsWithParams(offset, limit): Observable<JSON> {
    console.log(this.pokemonsUrl);
    return this.http.get<JSON>(this.pokemonsUrl + '?offset=' + offset + '&limit=' + limit);
  }

  getPokemonsFull(): Observable<JSON> {
    console.log(this.pokemonsUrl);
    return this.http.get<JSON>(this.pokemonsUrl + '?offset=0&limit=151');
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(environment.pokemonApiUrl + 'pokemons/' + id);
  }

  getTeamIds(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.cookieService.get('access_token')
      })
    };
    console.log('Bearer ' + this.cookieService.get('access_token'));
    return this.http.get<any>(environment.pokemonApiUrl + 'trainers/me/team', httpOptions);
  }

  getTeamPokemons(idList): Observable<any[]> {
        let responsesTab: Array<Observable<Pokemon>> = new Array<Observable<Pokemon>>();
        for (let id of idList) {
          console.log('id: ' + +id);
          responsesTab.push(this.http.get<Pokemon>(environment.pokemonApiUrl + 'pokemons/' + +id));
        }
        return forkJoin(responsesTab);
  }

  updateTeam(pkmnList): Observable<any> {
    let idList = new Array<Number>();
    for (let pkmn of pkmnList) {
      idList.push(pkmn.id);
    }

    // idList = [1, 2, 3, 4, 77];

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.cookieService.get('access_token')
      })
    };

    console.log('Bearer ' + this.cookieService.get('access_token'));
    return this.http.put<any>(environment.pokemonApiUrl + 'trainers/me/team', idList, httpOptions);
  }
}
