import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  public volume:number = 10;
  public array = ["element 1","element 2","element 3"];
  constructor() { }

  ngOnInit() {
  }

}
