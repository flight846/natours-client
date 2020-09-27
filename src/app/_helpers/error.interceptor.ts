import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from '../auth/auth.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';




@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private toastService: NotificationsService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 404) {
          this.toastService.create( "", err.error.message, NotificationType.Error );
        } else if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.toastService.create( "", err.error.message, NotificationType.Error );
          this.authService.logout();
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
