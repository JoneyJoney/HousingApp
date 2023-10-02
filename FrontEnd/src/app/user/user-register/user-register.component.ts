import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  userForm: FormGroup;
  usersubmitted: boolean;
  user: User;
  constructor(private fb: FormBuilder, private userservice: UserService,private alertify: AlertifyService) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      cpassword: ['', [Validators.required, CompareValidator('password')]],
      mobile: ['', [Validators.required, Validators.pattern("^[789]\\d{9}$")]],
    });

  }
  SubmitData() {
    if (this.userForm.valid) {
      console.log(this.userForm);
      this.usersubmitted = true;
      //this.user = Object.assign(this.user, this.userForm.value);
      this.userservice.addUsers(this.userData());
      this.userForm.reset();
      this.usersubmitted = false;
      this.alertify.success('Registration done successfully');
    }
    else
    {
      this.alertify.error('Please enter the madatory input');
    }
  }

  userData(): User {
    return this.user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }


  get username() {
    return this.userForm.get('username') as FormControl;
  }
  get email() {
    return this.userForm.get('email') as FormControl;
  }
  get password() {
    return this.userForm.get('password') as FormControl;
  }
  get mobile() {
    return this.userForm.get('mobile') as FormControl;
  }
}

function CompareValidator(otherControlName: string) {
  let thisControl: FormControl; //confirm password
  let otherControl: FormControl; //password

  return (control: FormControl) => {
    if (!control.parent)
      return null;

    thisControl = control; //
    otherControl = thisControl.parent?.get(otherControlName) as FormControl;

    otherControl.valueChanges.subscribe(() => {
      thisControl.updateValueAndValidity();
    });

    if (otherControl.value != thisControl.value) {
      return {
        matchValue: false
      };
    }
    return null;
  }
} 
