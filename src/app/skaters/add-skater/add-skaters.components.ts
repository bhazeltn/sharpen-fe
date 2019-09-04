import { SkaterService } from '../../shared/skater.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skater',
  templateUrl: './add-skater.component.html',
  styleUrls: ['../skater.component.css']
})

export class AddSkaterComponent implements OnInit {
  skaterForm: FormGroup;
  skaterArr: any = [];

  ngOnInit() {
    this.addIssue();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public skaterService: SkaterService
  ){ }

  addIssue() {
    this.skaterForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      hollow: [''],
      interval: ['']
    });
  }

  submitForm() {
    this.skaterService.addSkater(this.skaterForm.value).subscribe(res => {
      console.log('Skater added!')
      this.ngZone.run(() => this.router.navigateByUrl('/skaters-list'))
    });
  }

}
