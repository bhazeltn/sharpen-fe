import { Component, OnInit } from '@angular/core';
import { Skater } from '../shared/skater';
import { SkaterService } from '../shared/skater.service';

@Component({
  selector: 'app-skaters',
  templateUrl: './skaters.component.html',
  styleUrls: ['./skaters.component.scss']
})
export class SkatersComponent implements OnInit {

  skaters;

  constructor(private skaterService: SkaterService) { }

  ngOnInit() {
    this.loadSkaters();
  }

  loadSkaters(){
    return this.skaterService.getSkaters().subscribe((data: {}) => {
      this.skaters = data;
    });
  }
}
