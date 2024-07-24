import { AccountType } from '@app/settings/state/account.model';

export interface AccountGetRequest {
  email: string;
  password: string;
  type: AccountType;
}
