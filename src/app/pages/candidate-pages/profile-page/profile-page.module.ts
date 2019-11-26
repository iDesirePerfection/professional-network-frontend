import { ProfilePageComponent } from './profile-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesPageModule } from '../experiences-page/experiences-page.module';
import { MatTabsModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ProfilePageComponent],
    imports: [
        CommonModule,
        ExperiencesPageModule,
        MatTabsModule,
        FlexLayoutModule,
        FormsModule
    ],
    exports: [ProfilePageComponent]
  })

  export class ProfilePageModule { }