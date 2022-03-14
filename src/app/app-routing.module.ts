import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardTabsPage } from './views/dashboard-tabs/dashboard-tabs.page';
import { UserProfilePage } from './views/user-profile/user-profile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginPage',
    pathMatch: 'full'
  },
  {
    path: 'loginPage',
    loadChildren: () => import('./views/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'registeredPage',
    loadChildren: () => import('./views/registered-page/registered-page.module').then( m => m.RegisteredPagePageModule)
  },
  {
    path: 'tabsPage',
    loadChildren: () => import('./views/dashboard-tabs/dashboard-tabs.module').then( m => m.DashboardTabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
