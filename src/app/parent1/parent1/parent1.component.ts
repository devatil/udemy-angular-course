import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../../../libs';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss'],
})
export class Parent1Component implements OnInit {
  @ViewChild(Child1Component) child1: Child1Component;

  name = '';
  calculateData;
  succesStatus = 0;
  constructor() {}

  ngOnInit(): void {}

  calculate() {
    this.calculateData = {
      name: this.name,
      status: this.succesStatus,
    };
  }

  resetFormFunc(name) {
    alert(name);
    this.name = '';
    this.succesStatus = 0;
    this.calculateData = '';
  }

  childTrigger() {
    this.child1.alertChl();
  }
}
