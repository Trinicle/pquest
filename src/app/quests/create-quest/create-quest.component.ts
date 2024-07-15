import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pq-create-quest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.scss'],
})
export class CreateQuestComponent implements OnInit, OnDestroy {
  showCreateQuest: boolean = false;
  constructor() {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onToggleCreateQuest() {
    this.showCreateQuest = !this.showCreateQuest;
  }
}
