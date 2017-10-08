import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { PublicNavbarComponent } from './public-navbar/public-navbar.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminPostListComponent } from './admin-post-list/admin-post-list.component';
import { AdminPostFormComponent } from './admin-post-form/admin-post-form.component';
import { AdminPostViewComponent } from './admin-post-view/admin-post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicNavbarComponent,
    PublicHomeComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminPostListComponent,
    AdminPostFormComponent,
    AdminPostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }