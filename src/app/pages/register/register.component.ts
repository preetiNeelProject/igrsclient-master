import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';
import { SelectTagProperties } from 'src/app/model/district';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})

export class RegisterComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    secondName: [''],
    lastName: [''],
    districtName: ['', [Validators.required]],
  });

  securityFormGroup = this._formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    answered: ['', [Validators.required, Validators.minLength(3)]],
    securityQuestion: ['', [Validators.required, Validators.minLength(5)]]
  });


  contactFormGroup = this._formBuilder.group({
    mobileNo: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
    emailId: ['', [Validators.required, Validators.email]],
    primaryLanguage: ['English']
  });

  districts: SelectTagProperties[] = [
    { value: 'Bilaspur', viewValue: 'Bilaspur' },
    { value: 'Raipur', viewValue: 'Raipur' },
    { value: 'Durg', viewValue: 'Durg' },
  ];

  langusges: string[] = ['English', 'हिन्दी'];
  securityQuestion: string[] = ['', 'आपकी माताजी का नाम क्या है?', 'आपका पसंदीदा पालतू जानवर क्या है?'];

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)').pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  checkFirstForm(stepper: MatStepper) {
    console.log(this.firstFormGroup.value.firstName);
    console.log(this.firstFormGroup.value.secondName);
    console.log(this.firstFormGroup.value.lastName);
    stepper.next();
  }

}
