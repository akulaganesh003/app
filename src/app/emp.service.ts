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


  employeAraay(){
    debugger;
    let emp =[  
                   {name:"Shyam", email:"shyamjaiswal@gmail.com"},  
                   {name:"Bob", email:"bob32@gmail.com"},  
                   {name:"Jai", email:"jai87@gmail.com"}  
            ]  
            return emp
          }

    collegeStudents(){
      debugger
      let student=[
        {id:1,name:"Ganesh",place:"Gopavaram"},
        {id:2,name:"Sriram",place:"Amalapuram"},
        {id:3,name:"Vinay",place:"Gopavaram"},
        {id:4,name:"Mallesh",place:"Dodavaram"},
        {id:5,name:"Mark",place:"Gangalakurru"},
        {id:6,name:"Venkatesh",place:"Peruru"},
        {id:7,name:"Srinu",place:"Peruru"},
        {id:8,name:"Subbu",place:"Aduru"},
        {id:9,name:"Pradeep",place:"HighSchool Center"},
        {id:10,name:"Anand",place:"Edarapalli"},
     ];
     return student
    }      


}
