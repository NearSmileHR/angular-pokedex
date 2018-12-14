import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mail: string;
  mdp: string;

  constructor() { }

  ngOnInit() {
    this.mail = environment.loginMail;
    this.mdp = environment.loginMdp;
  }

  connexion() {

  }

}
