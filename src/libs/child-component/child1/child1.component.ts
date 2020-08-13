import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnInit {
  @Input()
  data: any;
  @Output()
  resetForm: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitEvent(name) {
    this.resetForm.emit(name);
  }

  alertChl() {
    alert('child componentine ulastiniz..');
    console.log('Child componentini tetiklediniz..');
    this.data = {
      name: 'triggered',
      succesStatus: 'false',
    };
  }
}
