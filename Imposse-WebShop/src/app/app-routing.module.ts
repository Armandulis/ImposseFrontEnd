import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryListComponent} from './story/story-list/story-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductAddComponent} from "./products/product-add/product-add.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'story', component: StoryListComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
