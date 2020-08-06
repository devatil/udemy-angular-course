import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-directive',
	templateUrl: './directive.component.html',
	styleUrls: [ './directive.component.scss' ]
})
export class DirectiveComponent implements OnInit {
	title = true;
	name;
	username;

	constructor() {}

	ngOnInit(): void {}

	changeTitle() {
		this.title = !this.title;
	}
}
