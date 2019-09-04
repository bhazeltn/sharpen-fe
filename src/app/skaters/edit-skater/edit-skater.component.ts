import { SkaterService } from '../../shared/skater.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-skater',
  templateUrl: './edit-skater.component.html',
  styleUrls: ['../skaters.component.scss']
})

export class EditSkaterComponent implements OnInit {
  skaterList: any = [];
  updateSkaterForm: FormGroup;

  ngOnInit() {
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public skaterService: SkaterService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.skaterService.getSkater(id).subscribe((data) => {
      this.updateSkaterForm = this.fb.group({
        first_name: [data.first_name],
        last_name: [data.last_name],
        email: [data.email],
        hollow: [data.hollow],
        interval: [data.interval]
      });
    });
  }

  updateForm(){
    this.updateSkaterForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      hollow: [''],
      interval: ['']
    });
  }

  submitForm(){
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.skaterService.updateSkater(id, this.updateSkaterForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/skaters-list'))
    });
  }

}
