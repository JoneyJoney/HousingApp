import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { RentpropertyComponent } from './property/rentproperty/rentproperty.component';
import { PropertydetailComponent } from './property/propertydetail/propertydetail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

const routes: Routes = [
  {path:'',component : PropertyListComponent},
  {path:'rentproperty',component : PropertyListComponent},
  {path:'addproperty',component : AddpropertyComponent},
  {path:'propertydetail/:id',component : PropertydetailComponent},
  {path:'userlogin',component : UserLoginComponent},
  {path:'userregister',component : UserRegisterComponent},
  {path:'**',component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
