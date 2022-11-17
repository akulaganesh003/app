import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  SocialMedia=[{id:1,name:"youtube",show:true},
                {id:2,name:"Insta",show:true},];

  message="Good morning";   
  responsemsg: any;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  
  response(event){
    console.log(event);
    this.responsemsg=event;
  }

}
