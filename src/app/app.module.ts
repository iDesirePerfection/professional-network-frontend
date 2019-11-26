import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { ExperiencesPageModule } from './pages/candidate-pages/experiences-page/experiences-page.module';
import { ExperiencesService } from './services/candidate-services/experiences.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageModule } from './pages/candidate-pages/profile-page/profile-page.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    ExperiencesPageModule,
    HttpClientModule,
    ProfilePageModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ExperiencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
