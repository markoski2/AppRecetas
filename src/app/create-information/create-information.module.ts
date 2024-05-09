import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateInformationPageRoutingModule } from './create-information-routing.module';

import { CreateInformationPage } from './create-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateInformationPageRoutingModule
  ],
  declarations: [CreateInformationPage]
})
export class CreateInformationPageModule {}
