import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { NotificationsService, NotificationType } from 'angular2-notifications';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: NotificationsService
  ) {
    // redirect to home if already logged in
    if (this.authService.userValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required, Validators.minLength(8)],
      passwordConfirm: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService
      .signup(this.signupForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.toastService.create("", "Registration successful", NotificationType.Success);
          this.router.navigate(["../login"], { relativeTo: this.route });
        },
        (error) => {
          this.toastService.create("", error.errors.messsage, NotificationType.Error);
          this.loading = false;
        }
      );
  }
}
