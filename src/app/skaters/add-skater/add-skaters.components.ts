import { SkaterService } from '../../shared/skater.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skater',
  templateUrl: './add-skater.component.html',
  styleUrls: ['../skaters.component.scss']
})

export class AddSkaterComponent implements OnInit {
  skaterForm: FormGroup;
  skaterArr: any = [];

  ngOnInit() {
    this.addSkater();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public skaterService: SkaterService
  ) { }

  addSkater() {
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
      alert(this.skaterForm.value.first_name + ' ' + this.skaterForm.value.last_name + ' added');
      this.ngZone.run(() => this.router.navigateByUrl('/skater-list'));
    });
  }

}
