import { Component, computed, inject, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pq-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
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
    keys: new FormControl([]),
    completeByDate: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(12),
    ]),
    repository: new FormControl(''),
  });

  signal = signal([]);
  allKeys: string[] = [
    'Angular',
    'React',
    'Azure',
    'HTML',
    'CSS',
    'TypeScript',
    'JavaScript',
    'C#',
    '.NET',
  ];

  filteredKeys = computed(() => {
    const currentKey = this.form.get('currentKey')?.value?.toLowerCase();
    return currentKey
      ? this.allKeys.filter(key => key.toLowerCase().includes(currentKey))
      : this.allKeys.slice();
  });

  constructor(
    private dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) private data: any,
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  toggleSubmit() {
    this.dialogRef.close();
  }

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  currentFruit = '';
  readonly fruits = signal(['Lemon']);
  readonly allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  readonly filteredFruits = computed(() => {
    const currentFruit = this.currentFruit.toLowerCase();
    return currentFruit
      ? this.allFruits.filter(fruit => fruit.toLowerCase().includes(currentFruit))
      : this.allFruits.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.update(fruits => [...fruits, value]);
    }

    // Clear the input value
    this.currentFruit = '';
  }

  remove(fruit: string): void {
    this.fruits.update(fruits => {
      const index = fruits.indexOf(fruit);
      if (index < 0) {
        return fruits;
      }

      fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
      return [...fruits];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.update(fruits => [...fruits, event.option.viewValue]);
    this.currentFruit = '';
    event.option.deselect();
  }
}
