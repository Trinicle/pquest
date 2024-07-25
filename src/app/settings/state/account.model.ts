import { Quest } from '@app/quests/state/quest.model';

export type AccountType = 'USER' | 'ORGANIZATION';

export interface AccountDetail {
  id: string;
  country: string;
  postalCode?: string;
  city: string;
  image: File | string;
  type: AccountType;
  name: string;
  email: string;
  password: string;
}

export interface Account {
  id: string;
  country: string;
  postalCode?: string;
  city: string;
  image: File | string;
  type: AccountType;
  name: string;
  email: string;
}

export const createAccount = (params: Partial<Account>): Account => ({
  id: '',
  country: '',
  city: '',
  image: '',
  type: 'ORGANIZATION',
  name: '',
  email: '',
  ...params,
});

export interface Organization {
  id: string;
  name: string;
  country: string;
  postalCode?: string;
  city: string;
  business: string;
  image: File;
}

export interface Contact {
  id: string;
  email: string;
  profile: string;
  website: string;
}

export interface OrganizationAccount extends AccountDetail {
  business: string;
  employees: number;
  followers: number;
}

export interface UserAccount extends AccountDetail {
  contactInfo: Contact;
  organizations: Organization[];
  quests: Quest[];
}
