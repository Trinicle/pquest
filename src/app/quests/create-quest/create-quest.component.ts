import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'pq-create-quest',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.scss'],
})
export class CreateQuestComponent implements OnInit, OnDestroy {
  constructor(private dialog: Dialog) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  onToggleCreateQuest() {
    const dialogRef = this.dialog.open<string>(ModalComponent, {
      width: '700px',
      panelClass: 'create-quest-dialog',
    });
    dialogRef.closed.subscribe();
  }
}
