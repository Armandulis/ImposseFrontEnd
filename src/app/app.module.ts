import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryListComponent} from './story/story-list/story-list.component';
import { StoryService } from './shared/services/story.service';
import {HttpClientModule} from '@angular/common/http';
import { NavigationBarComponent } from './shared/navigationBar/navigation-bar/navigation-bar.component';
import {HomePageComponent, } from './home-page/home-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {AuthenticationService} from './shared/services/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from './shared/services/user.service';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './shop/products/products.component';
import {ProductService} from './shared/services/product.service';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataSharingService} from './shared/services/dataSharing.service';
import { ReviewAddComponent } from './review/review-add/review-add.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewUpdateComponent } from './review/review-update/review-update.component';
import {ReviewService} from "./shared/services/review.service";
import {ProductAddComponent} from "./products/product-add/product-add.component";
import {ProductUpdateComponent} from "./products/product-update/product-update.component";



@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    NavigationBarComponent,
    HomePageComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
    ReviewAddComponent,
    ReviewListComponent,
    ReviewUpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    StoryService,
    AuthenticationService,
    AuthGuard,
    UserService,
    ReviewService,
    ProductService,
    DataSharingService
  ],
  bootstrap: [AppComponent],
  entryComponents: [StoryListComponent]
})
export class AppModule { }
