import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticateService } from '../services/auth/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class TabsPageGuardGuard implements CanLoad {
  
  constructor(
    private router:Router,
    private authenticate:AuthenticateService
  ){}

  // Comprobar existencia de sesion
  canLoad(): Observable<boolean> {

    const hasSeenIntro = localStorage.getItem('TOKEN');

    return this.authenticate.isAuthenticated.pipe(
      filter(val => val !== null),
      take(1),
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigateByUrl('loginPage', { replaceUrl: true });
          return false;
        }
        
        // De existir sesion mantendra al usuarios en los tabs
        return true
      })
    );
  }
}
