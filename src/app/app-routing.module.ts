import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './guard.service';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CartComponent } from './pages/cart/cart.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomepageComponent, canActivate: [GuardService] },
  {
    path: 'food/:foodName/:foodId',
    component: FoodPageComponent,
    canActivate: [GuardService],
  },
  { path: 'cart', component: CartComponent, canActivate: [GuardService] },
  { path: 'auth/:status', component: AuthComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
