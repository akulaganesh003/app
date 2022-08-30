import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templetedrivenform',
  templateUrl: './templetedrivenform.component.html',
  styleUrls: ['./templetedrivenform.component.css']
})
export class TempletedrivenformComponent implements OnInit {

  todayDate : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
