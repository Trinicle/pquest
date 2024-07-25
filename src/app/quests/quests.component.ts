import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestCardComponent } from './quest-card/quest-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';
import { QuestInfoComponent } from './quest-info/quest-info.component';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountQuery } from '@app/settings/state/account.query';

@Component({
  selector: 'pq-quests',
  standalone: true,
  imports: [QuestCardComponent, UserInfoComponent, CreateQuestComponent, QuestInfoComponent],
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss'],
})
export class QuestsComponent implements OnInit, OnDestroy {
  temp: string[] = new Array(20);
  isLoading: Observable<boolean> = of(true);

  constructor(
    private router: Router,
    private accountQuery: AccountQuery,
  ) {}

  ngOnInit(): void {
    this.accountQuery.select().subscribe(account => {
      if (account.id === '') {
        this.router.navigate(['/login']);
      }
    });
  }
  ngOnDestroy(): void {}

  onCreateQuest() {
    this.router.navigate(['/create-quest']);
  }
}
