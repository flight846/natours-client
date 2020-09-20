import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationAnimationType, SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { TourModule } from './tour/tour.module';
import { AccountModule } from './account/account.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    TourModule,
    AccountModule,
    SimpleNotificationsModule.forRoot({
      position: ["top", "center"],
      showProgressBar: true,
      clickToClose: true,
      animate: NotificationAnimationType.FromTop,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
