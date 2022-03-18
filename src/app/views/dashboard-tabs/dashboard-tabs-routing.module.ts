import { NgModule } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ConfigureMenuPage } from '../configure-menu/configure-menu.page';
import { HomePage } from '../home/home.page';
import { UserProfilePage } from '../user-profile/user-profile.page';

import { DashboardTabsPage } from './dashboard-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardTabsPage,
    children: [
      {
        path: 'home',
        component: HomePage
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
