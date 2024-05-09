import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  },
  {
    path: 'Card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'create-information',
    loadChildren: () => import('./create-information/create-information.module').then( m => m.CreateInformationPageModule)
  },
  {
    path: 'see-information/:id',
    loadChildren: () => import('./see-information/see-information.module').then( m => m.SeeInformationPageModule)
  },
  {
    path: 'edit-information',
    loadChildren: () => import('./edit-information/edit-information.module').then( m => m.EditInformationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
