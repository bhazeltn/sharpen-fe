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
    },
    {
      first_name: "Skater",
      last_name: "Two",
      email: "s2@test.com",
    },
    {
      first_name: "Skater",
      last_name: "Three",
      email: "s3@test.com",
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
