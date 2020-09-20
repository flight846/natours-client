import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService, NotificationType } from 'angular2-notifications';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  href: string;

  constructor(
    private _notifications: NotificationsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.href = this.router.url.split('/')[1];
    this._notifications.create(
      "Error signing up",
      "Please enter email and passord",
      NotificationType.Error
    );
  }
}
