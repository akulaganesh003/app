import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor() { }

  user: User;
  usersList: User[] = []
  Button = 'Save';

  ngOnInit(): void {
   this.resetForm();
  }

  addStudent() {
    debugger;
    this.Button='Processing';debugger;
   this.usersList.push(this.user);
   this.resetForm();
   this.Button='Save';
  }

  editStudent(index: number) {
    this.user = this.usersList[index];
    this.deleteStudent(index);
  }

  deleteStudent(index: number) {
    this.usersList.splice(index, 1);
  }

  resetForm() {
   this.user = {age: null, name: '', college: ''};
  }
}

interface User {
 name: string;
 age: string;
 college: string;
}


