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
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {AuthenticationService} from './shared/services/authentication.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import {ProductService} from "./shared/services/product.service";


@NgModule({
  declarations: [
    AppComponent,
    StoryAddComponent,
    StoryUpdateComponent,
    StoryListComponent,
    NavigationBarComponent,
    HomePageComponent,
    LoginComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    StoryService,
    AuthenticationService,
    ProductService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
