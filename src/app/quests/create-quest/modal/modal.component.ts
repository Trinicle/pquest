import {
  Component,
  computed,
  inject,
  Inject,
  model,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy } from '@angular/core';
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
    keys: new FormControl([]),
    currentKey: new FormControl(''),
    completeByDate: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(12),
    ]),
    repository: new FormControl(''),
  });
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

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

  constructor(
    private dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) private data: any,
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  toggleSubmit() {
    this.dialogRef.close();
  }

  readonly keys = signal([] as string[]);
  readonly filteredKeys = computed(() => {
    const currentKey = this.form.get('currentKey')?.value?.toLowerCase();
    return currentKey
      ? this.allKeys.filter(key => key.toLowerCase().includes(currentKey))
      : this.allKeys.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  remove(fruit: string): void {
    this.keys.update(keys => {
      const index = keys.indexOf(fruit);
      if (index < 0) {
        return keys;
      }

      keys.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
      return [...keys];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.keys.update(keys => [...keys, event.option.viewValue]);

    this.form.patchValue({ currentKey: '' });
    console.log(this.form.get('currentKey')?.value);
    event.option.deselect();
  }
}
