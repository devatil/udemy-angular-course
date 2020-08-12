import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent implements OnInit {
  title = true;
  name;
  username;
  color;

  cities = [
    {
      id: 1,
      city: 'Istanbul',
      region: 'Marmara',
    },
    {
      id: 3,
      city: 'Izmir',
      region: 'Ege',
    },
    {
      id: 5,
      city: 'Malatya',
      region: 'Doguanadolu',
    },
    {
      id: 7,
      city: 'Samsun',
      region: 'Karadeniz',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  changeTitle() {
    this.title = !this.title;
  }
}
