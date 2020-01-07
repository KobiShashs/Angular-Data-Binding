import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

public subjects = ["Client","Server","Extreme Java","Cloud"];

public coupons = [
  {"copoun_name": "1+1","coupon_amount": 20,"coupon_owner":"Coca cola"},
  {"copoun_name": "3+1","coupon_amount": 15,"coupon_owner":"Pepsi"},
  {"copoun_name": "10+1","coupon_amount": 100,"coupon_owner":"Falafel Haifa"}
]


  // public arr = [
  //   {"name":"Cola","desc":"bset drink ever"}
  //  ,{"name":"Pepsi","desc":"best drink ever"},
  //  {"name":"John bryce","desc":"Learn fullstack today"}];
  constructor() { }

  ngOnInit() {
  }

}
