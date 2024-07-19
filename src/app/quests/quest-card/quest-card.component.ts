import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class QuestCardComponent implements OnInit, OnDestroy {
  @ViewChild('dismissButton') dismissButton!: ElementRef;
  @ViewChild('activeButton') activeButton!: ElementRef;

  constructor() {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onDismiss() {
    console.log('test');
  }

  onActive() {
    console.log('woo');
  }

  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    if (event.pointerId === -1) {
      return;
    }
    if (this.dismissButton.nativeElement.contains(event.target)) {
      this.onDismiss();
      return;
    }

    if (this.activeButton.nativeElement.contains(event.target)) {
      this.onActive();
      return;
    }
  }
}
