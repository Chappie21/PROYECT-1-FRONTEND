import { Injectable } from '@angular/core';
import { CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/auth/authenticate.service';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanLoad {
 
  constructor(
    private router:Router,
    private authenticate:AuthenticateService
  ){}

  // Comprobar existencia de sesion
  canLoad(): Observable<boolean> {
    return this.authenticate.isAuthenticated.pipe(
      filter(val => val !== null),
      take(1),
      map(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigateByUrl('tabsPage/home', { replaceUrl: true });
          return false;
        }
        else {
          return true;
        }
      })
    );
  }

}
