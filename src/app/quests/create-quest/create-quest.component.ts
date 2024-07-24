import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/markdown.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';

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
      `
      <p>Provide a summary of the quest, runtime, design principles, or basic structure.</p>
      <p>
        <s>&ZeroWidthSpace;</s>
      </p>
      <p>
        <strong>[Description]</strong>
      </p>
      <p>Description of Quest.</p>
      <p>
        <s>&ZeroWidthSpace;</s>
      </p>
      <p>
        <strong>[Structure]</strong>
      </p>
      <p>Structure of code.</p>
      <p>
        <s>&ZeroWidthSpace;</s>
      </p>
      <p>
        <strong>[References]</strong>
      </p>
      <p>Some references that may be useful.</p>
      `,
      [Validators.required, Validators.minLength(1), Validators.maxLength(30000)],
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

  options = {
    toolbarButtons: [
      ['bold', 'italic', 'underline', 'insertLink', 'clearFormatting'],
      ['formatOL', 'formatUL'],
    ],
    events: {
      initialized: function (editor: any) {
        editor._editor.el.classList.add('text-default');

        const styleElement = document.head.querySelector('style#default-styles');
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      },
    },
    pluginsEnabled: ['lists', 'link', 'charCounter', 'markdown'],
    tabSpaces: 4,
    charCounterMax: 10000,
    charCounterCount: true,
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

  onToggleSubmit() {
    console.log(this.form.get('description')?.value);
  }
}
