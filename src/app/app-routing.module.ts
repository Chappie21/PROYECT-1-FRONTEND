import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
