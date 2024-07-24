import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccount } from '@app/settings/state/account.model';
import { of } from 'rxjs';

@Component({
  selector: 'pq-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  account = of();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
