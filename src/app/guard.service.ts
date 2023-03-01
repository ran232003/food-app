import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { UserApiService } from './userApi.service';
@Injectable({ providedIn: 'root' })
export class GuardService implements CanActivate {
  constructor(
    private userService: UserApiService,
    private routerNavigate: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('g');
    if (this.userService.user) {
      return true;
    } else {
      console.log('in else, no access');
      return this.routerNavigate.createUrlTree(['/auth', 'signup']);
    }
    // let t = this.userService.userUpdate.pipe(
    //   take(1),
    //   map((user) => {
    //     console.log('asd');
    //     const isAuth = !!user;
    //     if (isAuth) {
    //       return true;
    //     }
    //     return this.routerNavigate.createUrlTree(['/auth/login']);
    //   })

    // );

    return false;
  }
}
