import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './core/layout/main-navbar/main-navbar.component';
import { MainHomeComponent } from './views/main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
