import { Component } from '@angular/core';
import { QuestCardComponent } from './quest-card/quest-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';

@Component({
  selector: 'pq-quests',
  standalone: true,
  imports: [QuestCardComponent, UserInfoComponent, CreateQuestComponent],
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss'],
})
export class QuestsComponent {}
