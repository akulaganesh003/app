import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TempletedrivenformComponent } from './templetedrivenform/templetedrivenform.component';

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
    children:[
      {
        path: 'ReactiveForm',
        component: ReactiveformComponent,
      },
      {
        path: 'TemplateDriven',
        component: TempletedrivenformComponent,
      }

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }