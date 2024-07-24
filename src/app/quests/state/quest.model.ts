import { Organization } from '@app/settings/state/account.model';

export interface Skill {
  name: string;
}

export interface Quest {
  id: string;
  name: string;
  organization: Organization;
  skills: Skill[];
  description: string;
  repository: string;
}
