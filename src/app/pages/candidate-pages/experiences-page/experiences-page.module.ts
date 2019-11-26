import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesPageComponent } from './experiences-page.component';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExperiencesPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [ExperiencesPageComponent]
})
export class ExperiencesPageModule { }
