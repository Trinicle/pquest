import { Quest } from '@app/quests/state/quest.model';

export interface UserQuests {
  activeQuests: Quest[];
  completedQuests: Quest[];
  savedQuests: Quest[];
}
