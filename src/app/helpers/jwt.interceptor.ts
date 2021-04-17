import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../services/authentication.service';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService
        ) {}
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authenticationService.getUserToken();
        if( token ){    
            request = request.clone({
                setHeaders: {
                    Authorization: `${token}`
                }
            });
        }
        return next.handle(request);
    }
}
