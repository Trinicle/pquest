import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapXLg } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'pq-quest-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './quest-card.component.html',
  styleUrls: ['./quest-card.component.scss'],
  viewProviders: [provideIcons({ bootstrapXLg })],
})
export class QuestCardComponent {}
