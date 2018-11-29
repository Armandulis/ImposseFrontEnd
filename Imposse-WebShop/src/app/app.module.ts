import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryAddComponent } from './story/story-add/story-add.component';
import { StoryUpdateComponent } from './story/story-update/story-update.component';
import { StoryListComponent } from './story/story-list/story-list.component';
import { StoryService } from './shared/services/story.service';
import {HttpClientModule} from '@angular/common/http';
import { NavigationBarComponent } from './shared/navigationBar/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StoryAddComponent,
    StoryUpdateComponent,
    StoryListComponent,
    NavigationBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    StoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
