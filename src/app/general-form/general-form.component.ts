import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})
export class GeneralFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  usersList:any=[];
  copy:any=[];
  fname;
  lname;
  mnumber;
  gmail;
  pwd;
  insert:boolean=true;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobilenumber:['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
       //mobilenumber:['', [Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.copy=[];
  }

  get f() { return this.registerForm.controls; }

  
  onSubmit() {
    debugger;
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let object;
    object = {
      fname :  this.registerForm.controls['firstName'].value,
      lname :   this.registerForm.controls['lastName'].value,
      mnumber :   this.registerForm.controls['mobilenumber'].value,
      gmail :    this.registerForm.controls['email'].value,
      pwd : this.registerForm.controls['email'].value,
    }
    this.insert=true;
    if(this.usersList.length == 0){
      //this.registerForm.controls['firstName'].setValue("Ganesh");
     this.usersList.push(this.registerForm.value);
     sessionStorage.setItem('Username', "Ganesh");
    }
    else{
      this.usersList.forEach(element => {
        if(element.fname == this.registerForm.controls['firstName'].value)
        { 
          alert('Already exists!');
          this.insert=false;
        }
        
      });
      if(this.insert){
        //this.registerForm.controls['firstName'].setValue("Durga");
        this.usersList.push(this.registerForm.value);
        //alert('SUCCESS!!');
      }
    }
    
      // alert('SUCCESS!!');
      //this.registerForm.reset();
      this.registerForm.controls['firstName'].setValue('');
      //this.registerForm.controls['lastName'].setValue('');
      //xthis.registerForm.controls['mobilenumber'].setValue('');
    
     console.log(this.registerForm.value);
     
  }

  movedata(){
    if(this.usersList.length != 0){
      this.copy= [...this.copy,...this.usersList]
      this.usersList=[];
      let i=0
      this.copy.forEach(x=>{
        x.rowindex=i++;
      })
      debugger
      this.copy.forEach(x=>{
         if(x.firstName == x.lastName){
          console.log("First Name "+ x.firstName + " and Last name "+x.lastName)
          this.copy.splice(x.rowindex,1);
         }
      })
      console.log(this.copy);
    }
    else{
      alert("Grid is empty");
    } 
  }
  delete(){
    this.usersList=[];
  }

}
