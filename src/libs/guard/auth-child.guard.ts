import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '..';

@Injectable({
  providedIn: 'root',
})
export class AuthChildGuard implements CanActivateChild {
  constructor(private userService: UserService) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.userService.isLogedIn;
  }
}
