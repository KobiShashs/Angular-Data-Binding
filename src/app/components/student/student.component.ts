import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  @Input()
  public studentName:string='';

  @Input()
  public studentVolume:number=5;
  public studentOldVolume:number = this.studentVolume;

  @Output()
  public change: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  onUpdteRange(event:Event){
    console.log()
    var delta=0;
    console.log("Updated: "+ (<HTMLInputElement>event.target).value);
    if(this.studentVolume>this.studentOldVolume){
      delta=delta+1;
      this.studentOldVolume++;
    }else if(this.studentVolume<this.studentOldVolume){
      delta = delta-1;
      this.studentOldVolume++;
    }

    
    console.log("delta: "+delta);
    this.change.emit(delta);
    
  }

}
