import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: UsuarioService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.authService.isLoggedIn()){
            const authToken = this.authService.getToken();
            const authReq = req.clone({
                setHeaders: {
                    authToken: authToken
                }
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
