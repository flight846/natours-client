import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/_models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: any;
  public publicUrl: string = environment.publicUrl;

  constructor(
    private authService: AuthService,
    private toastService: NotificationsService,
    private router: Router
  ) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authService.logout()
      .pipe(first())
      .subscribe(
          data => {
            this.toastService.create("", 'Logout successful.', NotificationType.Success);
            this.router.navigate(['/']);
          },
          error => {
              this.toastService.create('', error.error.message, NotificationType.Error);
          });
    }

  ngOnInit() {}

}
