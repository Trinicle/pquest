import { Injectable } from '@angular/core';
import { AccountGetRequest } from './login.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AccountStore } from '@app/settings/state/account.store';
import { Account, UserAccount } from '@app/settings/state/account.model';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'https://localhost:4200/account/';

  constructor(
    private http: HttpClient,
    private accountStore: AccountStore,
  ) {}

  temp(user: SocialUser) {
    const newAccount: UserAccount = {
      name: user.name,
      contactInfo: {
        id: '',
        email: user.email,
        profile: '',
        website: '',
      },
      organizations: [],
      quests: [],
      id: user.id,
      country: '',
      city: '',
      image: '',
      email: '',
      password: '',
      type: 'USER',
    };
    this.accountStore.update(newAccount);

    return of();
  }

  get(id: string, request: AccountGetRequest): Observable<void> {
    this.accountStore.setLoading(true);

    const params = new HttpParams()
      .set('email', request.email)
      .set('password', request.password ?? '')
      .set('type', request.type);

    return this.http.get<Account>(this.url.concat(id), { params }).pipe(
      map(account => {
        this.accountStore.update(account);
        this.accountStore.setLoading(false);
      }),
      catchError(err => {
        this.accountStore.setLoading(false);
        return throwError(() => err);
      }),
    );
  }
}
