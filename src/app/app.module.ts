import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// var config = {
//   apiKey: "AIzaSyACTpwWmYN0Pl98dQBikpidgV0qUDnO5-g",
//   authDomain: "ng-recipe-book-75587.firebaseapp.com",
//   databaseURL: "https://ng-recipe-book-75587.firebaseio.com",
//   projectId: "ng-recipe-book-75587",
//   storageBucket: "ng-recipe-book-75587.appspot.com",
//   messagingSenderId: "686794725563"
// };