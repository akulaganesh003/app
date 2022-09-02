import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  tempValue : any;
  tempValue1 : any;
  name:any;

  constructor() { }
  
   getvalue(val:any)
   {
    debugger
    console.warn(val);
    this.tempValue=val;
   }
   getvalue1(val:any)
   {
    console.warn(val);
    this.tempValue1=val;
   }

  ngOnInit(): void {
  }

}
