import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpService} from './emp.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TempletedrivenformComponent } from './templetedrivenform/templetedrivenform.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArrayComponent } from './array/array.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { GeneralFormComponent } from './general-form/general-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    EmpDataComponent,
    ReactiveformComponent,
    TempletedrivenformComponent,
    NavigationComponent,
    ArrayComponent,
    NgxDatatableComponent,
    GeneralFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserAuthModule

  ],
  providers: [EmpService],
  bootstrap: [AppComponent,NgxDatatableModule]
})
export class AppModule { }
