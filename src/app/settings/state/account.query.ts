import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Account } from './account.model';
import { AccountStore } from './account.store';

@Injectable({ providedIn: 'root' })
export class AccountQuery extends Query<Account> {
  account = this.select();
  constructor(protected override store: AccountStore) {
    super(store);
  }

  selectId() {
    return this.select(account => account.id);
  }
}
