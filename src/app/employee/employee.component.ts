import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder  } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EmpService} from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmpService]
})
export class EmployeeComponent implements OnInit {

  public results:any=[];
  users: any;
  @ViewChild('addEmployeeForm') form: NgForm;
  editMode: boolean = false;
  currentEmpId: string;

  constructor(private userData: EmpService) {
    this.userData.users().subscribe((data) => {
      this.users = data;
    });
  }

  addEmployee(data:any)
  {
    console.log(data)

    if(!this.editMode)
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
    })
    else
    this.userData.updateEmp(this.currentEmpId,data);

  }


  onDeleteEmployee(id: string){
    console.warn(id)
    this.userData.DeleteEmployee(id).subscribe((result)=>{
      console.warn(result);
    })
  }

  ngOnInit() {
        this.userData.getEmployees().subscribe((data =>{
          this.results=data;
        }));
  }



  onEditEmployee(id: string){
    this.currentEmpId = id;

   let currentEmp = this.results.find((p) => {return p.id == id});
   console.log(this.form);


   this.form.setValue({
    FirstName: currentEmp.FirstName,
    MiddleName: currentEmp.MiddleName,
    LastName: currentEmp.LastName,
    Email: currentEmp.Email,
    PhoneNo: currentEmp.PhoneNo,
    Address1: currentEmp.Address1,
    Address2: currentEmp.Address2,
    SAL: currentEmp.SAL,
    GenderId: currentEmp.GenderId,
    DeptId: currentEmp.DeptId,
    CountryId: currentEmp.CountryId,
    Pwd: currentEmp.Pwd
   });


   this.editMode = true;

  }

  empForm = new FormGroup({
    FirstName : new FormControl('',[Validators.required]),
    MiddleName : new FormControl(''),
    LastName : new FormControl('',[Validators.required]),
    Email : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9]+@[a-z0-9]+.com"),Validators.email]),
    PhoneNo : new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}")]),
    Address1 : new FormControl('',[Validators.required]),
    Address2 : new FormControl('',[Validators.required]),
    Salary : new FormControl('',[Validators.required]),
    Gender : new FormControl('',[Validators.required]),
    Deparment : new FormControl('',[Validators.required]),
    Country : new FormControl('',[Validators.required]),
    Password : new FormControl('',[Validators.required,Validators.minLength(8)]),
  })
}
