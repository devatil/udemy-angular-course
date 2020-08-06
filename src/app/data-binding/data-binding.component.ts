import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data-binding',
	templateUrl: './data-binding.component.html',
	styleUrls: [ './data-binding.component.scss' ]
})
export class DataBindingComponent implements OnInit {
	user = {
		name: 'Atilla',
		surname: 'Altun',
		favorite_place: 'Kiz kulesi',
		favorite_place_image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.R9s0ytC6Z_XvfbAWXsVKDQHaE8%26pid%3DApi&f=1',
		job: 'software enegenering'
	};
	constructor() {}

	ngOnInit(): void {}
}
