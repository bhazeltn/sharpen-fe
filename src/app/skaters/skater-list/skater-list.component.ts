import { SkaterService } from '../../shared/skater.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skater-list',
  templateUrl: './skater-list.component.html',
  styleUrls: ['../skaters.component.scss']
})
export class SkaterListComponent implements OnInit {

  SkaterList: any = [];


  ngOnInit() {
    this.loadSkaters();
  }

  constructor(
    public skaterService: SkaterService
  ) { }

   // Issues list
   loadSkaters() {
    return this.skaterService.getSkaters().subscribe((data: {}) => {
      this.SkaterList = data;
    });
  }
    // Delete issue
  deleteSkater(data){
      var index = index = this.SkaterList.map(x => x.first_name).indexOf(data.first_name);
      return this.skaterService.deleteSkater(data.id).subscribe(
        res => {this.SkaterList.splice(index, 1);
    });
   }
}
