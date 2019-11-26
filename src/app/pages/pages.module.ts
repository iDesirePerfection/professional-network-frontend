import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule } from '@angular/material';
import { ExperiencesPageModule } from './candidate-pages/experiences-page/experiences-page.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePageModule } from './candidate-pages/profile-page/profile-page.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    ExperiencesPageModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    ProfilePageModule


    
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
