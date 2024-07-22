import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestsComponent } from './quests/quests.component';
import { CreateQuestComponent } from './quests/create-quest/create-quest.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'PQuest',
  },
  {
    path: 'quests',
    component: QuestsComponent,
    title: 'PQuest',
  },
  {
    path: 'create-quest',
    component: CreateQuestComponent,
    title: 'PQuest',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix',
  },
];
