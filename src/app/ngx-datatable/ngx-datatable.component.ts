import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {
   
  empdata:any;
  collegeStudents:  any;

  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    debugger
    this.empdata=this.empService.employeAraay();
    this.collegeStudents=this.empService.collegeStudents();
  }

}
