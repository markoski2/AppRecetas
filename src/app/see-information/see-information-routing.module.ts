import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeInformationPage } from './see-information.page';

const routes: Routes = [
  {
    path: '',
    component: SeeInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeInformationPageRoutingModule {}
