import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { LoginService } from './state/login.service';
import { AccountStore } from '@app/settings/state/account.store';
import { UserAccount } from '@app/settings/state/account.model';
import { AccountQuery } from '@app/settings/state/account.query';
import { Router } from '@angular/router';
import { AccountGetRequest } from './state/login.model';

@Component({
  selector: 'pq-login',
  standalone: true,
  imports: [CommonModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user!: SocialUser;

  constructor(
    private authService: SocialAuthService,
    private loginService: LoginService,
    private accountQuery: AccountQuery,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      const request: AccountGetRequest = {
        email: user.email,
        type: 'USER',
      };
      this.loginService.temp(user);
      // this.loginService.get(user.id, request);
      this.router.navigate(['/quests', user.id]);
    });
  }

  test() {
    this.accountQuery.select().subscribe(t => console.log(t));
  }
}
