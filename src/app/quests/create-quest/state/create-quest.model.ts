import { Skill } from '@app/quests/state/quest.model';

export interface QuestPostRequest {
  organizationId: string;
  title: string;
  description: string;
  repository: string;
  skills: Skill[];
}
