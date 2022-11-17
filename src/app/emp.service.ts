import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpService {




  url="http://www.satishcodeden.in/api/EMP/getAllEMP/";
  url2="http://www.satishcodeden.in/api/EMP/addEmp";
  url1="http://www.satishcodeden.in/api/EMP/DeleteEMP?empId=";
  
  constructor(private http:HttpClient) { }

  user() 
  {
  return this.http.get(this.url);
  }
  saveUser(data:any){
    return this.http.post(this.url2,data)
  }


  getEmployees(){
    return this.http.get(this.url);
                   
  }

 
  users() 
  {
  return this.http.get(this.url);
  }
  DeleteEmployee(data:any){
    return this.http.delete(this.url1+data)
  }


  updateEmp(id: string, value:Data ){
      this.http.put(this.url+id, value)
      .subscribe();
  }


  employeAraay()
    {"employees";[  
      {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
      {"name":"Bob", "email":"bob32@gmail.com"},  
      {"name":"Jai", "email":"jai87@gmail.com"}  
  ]}  
  


}
