import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksPageModule)
      },
      {
        path: 'running',
        loadChildren: () => import('../running/running.module').then(m => m.RunningPageModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('../analytics/analytics.module').then(m => m.AnalyticsModule)
      },
      {
        path: 'rewards',
        loadChildren: () => import('../rewards/rewards.module').then(m => m.RewardsModule)
      },
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
