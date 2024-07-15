import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pq-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('modal') modal: any;

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    questDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(3000),
    ]),
    keys: new FormControl([]),
    currentKey: new FormControl(''),
    completeByDate: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(12),
    ]),
    repository: new FormControl(''),
  });

  isModalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  showModal() {
    this.isModalOpen = true;
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.modal.nativeElement.close();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.modal.nativeElement.contains(event.target) && this.isModalOpen) {
      this.isModalOpen = false;
      this.closeModal();
    }
  }
}
