import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {}
}
