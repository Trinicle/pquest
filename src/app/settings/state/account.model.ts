import { Quest } from '@app/quests/state/quest.model';

export interface Account {
  id: string;
  country: string;
  postalCode?: string;
  city: string;
  image: File;
  username: string;
  password: string;
}

export interface Affiliation {
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

export interface Organization extends Account {
  name: string;
  business: string;
  employees: number;
  followers: number;
}

export interface User extends Account {
  firstName: string;
  lastName: string;
  contactInfo: Contact;
  affiliations: Affiliation[];
  quests: Quest[];
}
