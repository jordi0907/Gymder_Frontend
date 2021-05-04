import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UiServiceService } from '../services/ui-service.service';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioGuard implements CanActivateChild {
  constructor(private auth: UsuarioService, private router: Router, private UiService: UiServiceService) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem("ACCESS_TOKEN") !== null) {
      this.auth.getMe();
      return true;
    } else {
      this.router.navigate(['login']);
      this.UiService.alertaInformativa('Se ha de iniciar sesión');
      return false;
    }
  }
}
