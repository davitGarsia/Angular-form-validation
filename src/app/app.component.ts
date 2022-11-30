import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ng-Forms';
  cvForm!: FormGroup;

  ngOnInit() {
    this.cvForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      ghLink: new FormControl(null, Validators.required),
      linkedIn: new FormControl(null, Validators.required),
      workPlace: new FormControl(null, Validators.required),
      workStart: new FormControl(null, Validators.required),
      workEnd: new FormControl(null, Validators.required),
      institution: new FormControl(null, Validators.required),
      eduStart: new FormControl(null, Validators.required),
      eduEnd: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.cvForm);
  }
}
