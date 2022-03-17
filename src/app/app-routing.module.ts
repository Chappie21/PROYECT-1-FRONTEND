import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { TabsPageGuardGuard } from './guards/tabs-page-guard.guard';
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
    loadChildren: () => import('./views/login-page/login-page.module').then( m => m.LoginPagePageModule),
    canLoad: [LoginGuardGuard]
  },
  {
    path: 'registeredPage',
    loadChildren: () => import('./views/registered-page/registered-page.module').then( m => m.RegisteredPagePageModule),
    canLoad: [LoginGuardGuard]
  },
  {
    path: 'tabsPage',
    loadChildren: () => import('./views/dashboard-tabs/dashboard-tabs.module').then( m => m.DashboardTabsPageModule),
    canLoad: [TabsPageGuardGuard]
  },  {
    path: 'change-passowrd',
    loadChildren: () => import('./views/change-passowrd/change-passowrd.module').then( m => m.ChangePassowrdPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
