import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { EmployeeComponent } from './employee/employee.component';
import { GeneralFormComponent } from './general-form/general-form.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TempletedrivenformComponent } from './templetedrivenform/templetedrivenform.component';
import { ChildComponent } from './user-auth/child/child.component';
import { LoginComponent } from './user-auth/login/login.component';
import { ParentComponent } from './user-auth/parent/parent.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'EmployeeForm',
    component: EmployeeComponent
  },
  {
    path:'EmployeeData',
    component:  EmpDataComponent
  },
  {
    path:'Navigation',
    component:  NavigationComponent,
  },
  {
   path: 'ReactiveForm',
   component: ReactiveformComponent,
  },
  {
   path: 'TemplateDriven',
   component: TempletedrivenformComponent,
 },
 {
  path: 'ArrayData',
  component: ArrayComponent,
 },
 {
  path:'login',
  component:LoginComponent
 },
 {
 path:'NgxDatatables',
 component:NgxDatatableComponent
 },
 {
  path:'GeneralDetails',
  component:GeneralFormComponent
 },
 {
 path:'Parent',
 component:ParentComponent
 },
 {
  path:'Child',
  component:ChildComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
