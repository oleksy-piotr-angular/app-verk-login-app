import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { canOpenIfLoggedInGuard } from './guards/can-open-if-logged-in.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [canOpenIfLoggedInGuard], ///guard has been set to prevent unauthorized opening of the home page
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home page` when root is opening
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
