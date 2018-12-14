import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mail: string;
  mdp: string;
  creds;

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.mail = environment.loginMail;
    this.mdp = environment.loginMdp;
  }

  connexion() {
    this.loginService.connexion(this.mail, this.mdp)
      .subscribe(result => {
        if (result['error']) {
          console.log(result['message']);
        } else {
          console.log(result['access_token']);
          this.cookieService.put('access_token', result['access_token']);
          this.cookieService.put('refresh_token', result['refresh_token']);
          this.cookieService.put('expires_in', result['expires_in']);
          this.router.navigate(['/pokedex']);
        }
      });
  }

}
