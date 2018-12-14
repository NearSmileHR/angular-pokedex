import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = environment.pokemonApiUrl + 'auth/login';

  constructor(private http: HttpClient) {  }

  connexion(mail, pwd): Observable<JSON> {
    console.log('-> ' + mail + ' & ' + pwd);
    return this.http.post<JSON>(this.loginUrl,
      {
        'email': mail,
        'password': pwd
      });
  }


}
