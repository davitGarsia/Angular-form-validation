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
  //mailValidator = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

  ngOnInit() {
    this.cvForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern('[0-9]+'),
      ]),
      ghLink: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(http(s?)://)?(www.)?github.([a-z])+/([A-Za-z0-9]{1,})+/?$'
        ),
      ]),
      linkedIn: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(http(s?)://)?(www.)?linkedin.([a-z])+/([A-Za-z0-9]{1,})+/?$'
        ),
      ]),
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

  //validateEmail(control: FormControl): { [s: string]: boolean } {}
}
