import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-local-storage',
	templateUrl: './local-storage.component.html',
	styleUrls: [ './local-storage.component.scss' ]
})
export class LocalStorageComponent implements OnInit {
	name = '';
	localstorageName = '';
	localstorageObj;

	objName;
	objSurname;
	objAge;

	constructor() {}

	ngOnInit(): void {}

	setItem(value) {
		localStorage.setItem('name', value);
	}

	getItem() {
		this.localstorageName = localStorage.getItem('name');
	}

	clearItem() {
		localStorage.removeItem('name');
	}

	clearAllItem() {
		localStorage.clear();
	}

	setObjItem() {
		const obj = {
			name: this.objName,
			surname: this.objSurname,
			age: this.objAge
		};
		localStorage.setItem('obj', JSON.stringify(obj));
	}

	getObjItem() {
		this.localstorageObj = localStorage.getItem('obj');
	}
}
