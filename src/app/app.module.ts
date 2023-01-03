import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './core/layout/main-navbar/main-navbar.component';
import { MainHomeComponent } from './views/main-home/main-home.component';
import { MainProfileComponent } from './views/main-profile/main-profile.component';
import { AddPostComponent } from './core/layout/add-post/add-post.component';
import { DeletePostComponent } from './core/layout/delete-post/delete-post.component';
import { CardFeatureStoreModule } from './core/store/profil-cards-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainHomeComponent,
    MainProfileComponent,
    AddPostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardFeatureStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 5 }) : [],
    AppRoutingModule,
    NgxMasonryModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
