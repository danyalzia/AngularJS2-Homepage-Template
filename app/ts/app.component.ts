// This is our main component that will be bootsrapped. Additional components will be placed in it.

import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';

import {ContactFormComponent} from './contact-form.component';
import {Config} from './config.service';
import {MenuBarComponent} from './menu-bar.component';
import {PackagesComponent} from './packages.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/ts/app.component.html',
	// Add directives to all the additional components
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MenuBarComponent, ContactFormComponent, PackagesComponent],
	styles: [`
	body {
		background-color: #CCC;
		margin:80px 80px 100px 100px;
	}
	div#fixedheader {
		top:0px;
		left:0px;
		width:100%;
		color:#CCC;
		background:#333;
		padding:20px;
	}
	div#fixedfooter {
		bottom:0px;
		left:0px;
		width:100%;
		color:#CCC;
		background:#333;
		padding:8px;
	}

	div#extratext {
		font-size: 20px;
	}
    `] 
})
export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
}
