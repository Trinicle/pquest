import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'pq-create-quest',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.scss'],
})
export class CreateQuestComponent implements OnInit, OnDestroy {
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor() {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  openModal() {
    this.modalComponent.showModal();
  }
}
