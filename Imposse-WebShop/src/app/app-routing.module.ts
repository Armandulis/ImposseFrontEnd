import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryListComponent} from './story/story-list/story-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'story', component: StoryListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
