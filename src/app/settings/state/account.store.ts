import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Account, createAccount } from './account.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'account',
  resettable: true,
})
export class AccountStore extends Store<Account> {
  constructor() {
    super(createAccount({}));
  }
}
