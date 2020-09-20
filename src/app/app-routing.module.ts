import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TourComponent } from './tour/tour.component';


const routes: Routes = [
  {
    path: "",
    component: TourComponent,
  },
  {
    path: "signup",
    component: AuthComponent,
  },
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "account",
    component: AccountComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
