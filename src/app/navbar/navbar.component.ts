import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../libs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}
  @Input() lang: any;
  @Output() langChange: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}

  toggled() {
    this.userService.login();
  }
}
