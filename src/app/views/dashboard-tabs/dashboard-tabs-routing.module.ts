import { NgModule } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ConfigureMenuPage } from '../configure-menu/configure-menu.page';
import { UserProfilePage } from '../user-profile/user-profile.page';

import { DashboardTabsPage } from './dashboard-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardTabsPage,
    children: [
      {
        path: 'user',
      },
      {
        path: 'profile',
        component: UserProfilePage
      },
      {
        path: 'settings',
        component: ConfigureMenuPage
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardTabsPageRoutingModule {}
