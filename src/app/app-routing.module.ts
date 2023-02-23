import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'food/:foodName/:foodId', component: FoodPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'memories', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
