import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '..';

@Injectable({
  providedIn: 'root',
})
export class AuthdeactivateGuard implements CanDeactivate<boolean> {
  constructor(private userService: UserService) {}
  canDeactivate(
    component: boolean,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return this.userService.isLogedIn;
  }
}
