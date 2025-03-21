import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canOpenIfLoggedInGuard } from './guards/can-open-if-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage', //redirect to homepage if the path is empty
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ), // lazy loading of home page module
    canActivate: [canOpenIfLoggedInGuard], //a guard has been set to allow only logged in users to visit this home page
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ), // lazy loading of login page module
  },
  { path: '**', redirectTo: 'homepage' }, //redirect to home page if the path is not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
