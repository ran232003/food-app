import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodListComponent } from './homepage/food-list/food-list.component';
import { FoodItemComponent } from './homepage/food-item/food-item.component';
import { MatCardModule } from '@angular/material/card';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './components/input/input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './components/tags/tags.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartComponent } from './pages/cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './pages/auth/auth.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomepageComponent,
    FoodListComponent,
    FoodItemComponent,
    InputComponent,
    TagsComponent,
    FoodPageComponent,
    CartComponent,
    CartItemsComponent,
    NotFoundComponent,
    AuthComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    NgbModule,
    MatCardModule,
    NgbRatingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
