import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pq-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('modalContent') modalContent!: ElementRef;

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
    currentKey: new FormControl(''),
    completeByDate: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(12),
    ]),
    repository: new FormControl(''),
  });

  isModalOpen: boolean = false;
  keys: string[] = ['test', 'hello'];

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

  addKey() {
    const currentValue: string = this.form.get('currentKey')?.value as string;
    if (currentValue !== '') {
      this.keys.push(currentValue);
      this.form.patchValue({ currentKey: '' });
    }
  }

  removeKey(inputKey: string) {
    console.log('test');
    this.keys = this.keys.filter(key => key !== inputKey);
  }

  resetModal() {
    this.form.reset();
  }

  submitModal() {
    this.resetModal();
    this.closeModal();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    if (event.pointerId === -1) {
      return;
    }

    if (
      this.modal.nativeElement.hasAttribute('open') &&
      !this.modalContent.nativeElement.contains(event.target) &&
      this.modal.nativeElement.contains(event.target)
    ) {
      this.closeModal();
    }
  }
}
