import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  ChannelName=[];

  @Input()
  Wishes:string;

  @Output()
  confirmResponse= new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  confirmmessage(){
    console.log("Clicked to send data child to parent");
    const object={youtube:"Received",Insta:"Received"};
    this.confirmResponse.emit(object);
    
  }

}
