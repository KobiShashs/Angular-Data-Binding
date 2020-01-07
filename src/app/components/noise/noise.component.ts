import { Component, OnInit, Input } from '@angular/core';
import { log, isNumber } from 'util';

@Component({
  selector: 'app-noise',
  templateUrl: './noise.component.html',
  styleUrls: ['./noise.component.css']
})
export class NoiseComponent implements OnInit {
  public myCount: number=20;
  
  countChange(count:number) {
    if(isNumber(count)){
      console.log("Got delta: "+count);
      this.myCount=this.myCount+count;
    }
    //console.log(count);
  }
  constructor() { }

  ngOnInit() {
  
  }

}
