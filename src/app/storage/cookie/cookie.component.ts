import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-cookie',
	templateUrl: './cookie.component.html',
	styleUrls: [ './cookie.component.scss' ]
})
export class CookieComponent implements OnInit {
	name: '';
	cookieValue;
	isCookie;
	constructor(private cookieService: CookieService) {}

	ngOnInit(): void {}

	setItemCookie(value) {
		this.cookieService.set('name', value);
	}
	getItemCookie() {
		this.cookieValue = this.cookieService.get('name');
	}
	clearItemCookie() {
		this.cookieService.delete('name');
	}
	clearAllCookie() {
		this.cookieService.deleteAll;
	}

	checkCookie() {
		this.isCookie = this.cookieService.check('name');
	}
}
