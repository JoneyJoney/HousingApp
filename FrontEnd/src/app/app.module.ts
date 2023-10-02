import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import {HttpClientModule} from '@angular/common/http'
import { HousingService } from './services/housing.service';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { RentpropertyComponent } from './property/rentproperty/rentproperty.component';
import { PropertydetailComponent } from './property/propertydetail/propertydetail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';


@NgModule({
  declarations: [		
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddpropertyComponent,
    RentpropertyComponent,
    PropertydetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
