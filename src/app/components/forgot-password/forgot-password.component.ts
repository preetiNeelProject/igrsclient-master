import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  securityQuestion:string[] = ['','आपकी माताजी का नाम क्या है?','आपका पसंदीदा पालतू जानवर क्या है?'];

  stepperOrientation: Observable<StepperOrientation>;
  constructor(private _formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) { 
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)').pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  firstFormGroup = this._formBuilder.group({
    userID: ['', [Validators.required, Validators.minLength(4)]],
    answered: ['',[Validators.required, Validators.minLength(3)]],
    securityQuestion: ['', [Validators.required]],
  });

  securityFormGroup = this._formBuilder.group({
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    newConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
   });



  ngOnInit(): void {
  }

}
