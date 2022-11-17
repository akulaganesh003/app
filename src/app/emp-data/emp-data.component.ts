import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html', 
  styleUrls: ['./emp-data.component.css'],
  providers: [EmpService,NgxDatatableModule]
})
export class EmpDataComponent implements OnInit {
  
  users: any;
  public results:any=[];
  currentEmpId: string;


  constructor(private _EmpService: EmpService) {
    this._EmpService.getEmployees().subscribe((data) => {
      this.users = data;
    });
  }
   
  onDeleteEmployee(id: string){
    console.warn(id)
    this._EmpService.DeleteEmployee(id).subscribe((result)=>{
      console.warn(result);
    })
  }
  

  onEditEmployee(id: string){
    this.currentEmpId = id;

   //let currentEmp = this.results.find((p) => {return p.id == id});
  // console.log(this.form);


  // this.form.setValue({
   // FirstName: currentEmp.FirstName,
   // MiddleName: currentEmp.MiddleName,
    //LastName: currentEmp.LastName,
    //Email: currentEmp.Email,
    //PhoneNo: currentEmp.PhoneNo,
    //Address1: currentEmp.Address1,
    //Address2: currentEmp.Address2,
    //SAL: currentEmp.SAL,
   // GenderId: currentEmp.GenderId,
   // DeptId: currentEmp.DeptId,
    //CountryId: currentEmp.CountryId,
    //Pwd: currentEmp.Pwd
   //});


  // this.editMode = true;

  }

  ngOnInit(): void {
  }

  


}
