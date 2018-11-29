import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryListComponent} from './story/story-list/story-list.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'story', component: StoryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
