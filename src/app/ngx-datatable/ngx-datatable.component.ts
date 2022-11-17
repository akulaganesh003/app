import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {
   
  empdata:any=[];

  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    debugger
    this.empdata=this.empService.employeAraay;
  }

}
