import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App2RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    ShoppingCartComponent,
    ProductComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    App2RoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
