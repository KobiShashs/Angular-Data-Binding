import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public volume:number = 5;
  public professions = ["Intro to programming","Basic Java", "Spring Framework", "Intro to client Side: HTML+CSS+JS",
                        "Angular 8", "Extreme Java","Design Patterns", "Functional Java"]


  constructor() { }

  ngOnInit() {
  }

}
