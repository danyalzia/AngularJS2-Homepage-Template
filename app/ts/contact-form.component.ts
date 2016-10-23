import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';

import {Config} from './config.service';
import {MenuBarComponent} from './menu-bar.component';
import {PackagesComponent} from './packages.component';

class User {
   firstname:string;
   lastname:string;
   password:string;
   email:string;
}

interface ValidationResult {
 [key:string]:boolean;
}

// Check if the passworkd starts with Number
class PasswordValidator {
 static startsWithNumber(control: Control): ValidationResult { 
   if ( control.value && control.value.length > 0){
     if (isNaN(control.value[0]))
      return { 'startsWithNumber': true };
   }
 
   return null;
 }
}

@Component({
	selector: 'contact-form',
	templateUrl: 'app/ts/contact-form.component.html'
})

export class ContactFormComponent {
	user:User;
	studentForm: ControlGroup;
	constructor(fb: FormBuilder){
	
    this.user = new User();
    this.studentForm = fb.group({
       'firstname': new Control(this.user.firstname, Validators.required),
	   'lastname': new Control(this.user.lastname, Validators.required),
       'password': new Control(this.user.password, Validators.compose([Validators.required,PasswordValidator.startsWithNumber])),
	   'email': new Control(this.user.email, Validators.required)
    });
  }
  
  addNewGroup(user:User) {
    if (this.studentForm.valid) {
      alert('added ' + user.firstname + user.lastname + user.password + user.email);
      this.user = new User();
    }
    else {
       alert('Invalid Form! Please fill all the areas.');
    }
  }
}