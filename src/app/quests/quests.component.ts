import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestCardComponent } from './quest-card/quest-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';
import { QuestInfoComponent } from './quest-info/quest-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'pq-quests',
  standalone: true,
  imports: [QuestCardComponent, UserInfoComponent, CreateQuestComponent, QuestInfoComponent],
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss'],
})
export class QuestsComponent implements OnInit, OnDestroy {
  temp: string[] = new Array(20);

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onCreateQuest() {
    this.router.navigate(['/create-quest']);
  }
}
