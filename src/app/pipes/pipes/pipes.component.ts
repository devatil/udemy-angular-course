import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  title = 'AnkAramIn TasiNA BaK';

  upperCaseVal;

  constructor() {}

  ngOnInit() {
    this.upperCaseVal = (this.title as any).toLocaleUpperCase('tr-TR');
  }
}
