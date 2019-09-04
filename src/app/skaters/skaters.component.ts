import { Component, OnInit } from '@angular/core';
import { Skater } from './skater';

@Component({
  selector: 'app-skaters',
  templateUrl: './skaters.component.html',
  styleUrls: ['./skaters.component.scss']
})
export class SkatersComponent implements OnInit {

  skaters: Skater[] = [
    {
      first_name: "Skater",
      last_name: "One",
      email: "s1@test.com",
      hollow: "3/8",
      interval: "6 weeks",
    },
    {
      first_name: "Skater",
      last_name: "Two",
      email: "s2@test.com",
      hollow: "1/2",
      interval: "4 weeks",
    },
    {
      first_name: "Skater",
      last_name: "Three",
      email: "s3@test.com",
      hollow: "3/8",
      interval: "4 weeks",
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
