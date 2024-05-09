import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeInformationPageRoutingModule } from './see-information-routing.module';

import { SeeInformationPage } from './see-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeInformationPageRoutingModule
  ],
  declarations: [SeeInformationPage]
})
export class SeeInformationPageModule {}
