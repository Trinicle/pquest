import { Affiliation } from '@app/settings/state/account.model';

export interface Skill {
  name: string;
}

export interface Quest {
  id: string;
  name: string;
  affiliation: Affiliation;
  skills: Skill[];
  description: string;
  repository: string;
}
