import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MySite';
  public volume:number = 5;
  public grade:number =50;



  public constructor() {
  }

  ngOnInit(): void {
  }

  public buttonClicked(): void {
  }

  onUpdteName(event:Event){
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
    
  }

 
}
