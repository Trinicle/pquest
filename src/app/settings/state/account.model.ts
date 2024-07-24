import { Quest } from '@app/quests/state/quest.model';

export type AccountType = 'USER' | 'ORGANIZATION';

export interface Account {
  id: string;
  country: string;
  postalCode?: string;
  city: string;
  image: File;
  type: AccountType;
  email: string;
  password: string;
}

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

export interface OrganizationAccount extends Account {
  name: string;
  business: string;
  employees: number;
  followers: number;
}

export interface UserAccount extends Account {
  firstName: string;
  lastName: string;
  contactInfo: Contact;
  organizations: Organization[];
  quests: Quest[];
}
