import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  title = 'AnkAramIn TasiNA BaK';

  upperCaseVal;
  cashValue = 13432.423;
  today;
  percentValu = 2334;
  city = 'istanbul';
  cash = 1500;
  cities = ['istanbul', 'ankara', 'malatya', 'mersin', 'antalya', 'samsun'];
  arguman: string;

  constructor() {}
  objectVal: Object = [
    {
      foo: 'bar',
      baz: 'qux',
      nested: { xyz: 3, numbers: [1, 2, 3, 4, 5, 6] },
    },
  ];
  ngOnInit() {
    this.today = new Date().toDateString();
    this.upperCaseVal = (this.title as any).toLocaleUpperCase('tr-TR');
  }
}
