import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryListComponent} from './story/story-list/story-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {ProfileComponent} from './profile/profile.component';
import {ProductsComponent} from './shop/products/products.component';
import {ProductDetailsComponent} from './shop/product-details/product-details.component';
import {RegisterComponent} from "./register/register.component";
import {BasketComponent} from "./basket/basket.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'story', component: StoryListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'basket', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
