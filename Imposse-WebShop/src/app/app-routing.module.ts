import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryListComponent} from './story/story-list/story-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'story', component: StoryListComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
