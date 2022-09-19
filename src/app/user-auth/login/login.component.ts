import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobilenumber:['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 
  onSubmit() {
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
 
    alert('SUCCESS!!');
    this.registerForm.reset();
  }

}
