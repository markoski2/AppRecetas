import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateInformationPage } from './create-information.page';

const routes: Routes = [
  {
    path: '',
    component: CreateInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateInformationPageRoutingModule {}
