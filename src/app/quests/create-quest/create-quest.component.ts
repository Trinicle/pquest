import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'pq-create-quest',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FroalaEditorModule, FroalaViewModule],
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.scss'],
})
export class CreateQuestComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    description: new FormControl(
      'Provide a summary of the quest, runtime, design principles, or basic structure.',
      [Validators.required, Validators.minLength(1), Validators.maxLength(10000)],
    ),

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

  options: Object = {
    toolbarButtons: [['bold', 'italic', 'underline', 'clearFormatting']],
    events: {
      initialized: function (editor: any) {
        editor._editor.el.classList.add('text-default');
        editor._editor.el.classList.remove('default-styles-1');
      },
    },
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  formDescription(): any {
    return this.form.get('description');
  }

  addKey() {
    const currentValue: string = this.form.get('currentKey')?.value as string;
    if (currentValue !== '') {
      this.keys.push(currentValue);
      this.form.patchValue({ currentKey: '' });
    }
  }

  removeKey(inputKey: string) {
    this.keys = this.keys.filter(key => key !== inputKey);
  }

  onToggleBack() {
    this.router.navigate(['/quests']);
  }

  onToggleSubmit() {}
}
