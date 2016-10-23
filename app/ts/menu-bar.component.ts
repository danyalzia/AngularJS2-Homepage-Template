import {Component} from 'angular2/core';

@Component({
	selector: 'menu-page',
	templateUrl: 'app/ts/menu-bar.component.html',
	styles: [`
	body {margin: 0;}
	
	#titlebar {
		background-color: white;
		color: black;
		width: 100%;
		height: 100%;
	}
		
	ul.topnav {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
	}

	ul.topnav li {float: left;}

	ul.topnav li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	ul.topnav li a:hover:not(.active) {background-color: #111;}

	ul.topnav li a.active {background-color: #4CAF50;}

	ul.topnav li.right {float: right;}

	@media screen and (max-width: 600px){
		ul.topnav li.right, 
		ul.topnav li {float: none;}
	}
    `] 
})

export class MenuBarComponent {
	clickBlog() {
	  alert('Blog is clicked!');
	}
	
	clickAbout() {
	  alert('About is clicked!');
	}
}