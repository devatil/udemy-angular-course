import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../libs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userData;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getComAllUsers();
  }

  getComAllUsers() {
    this.userService.getAllUsers().subscribe(
      (data) => (this.userData = data),
      (error) => {
        alert(`${error.error.exception.message}`);
        console.log('user listesi alinamadi', error);
      }
    );
  }
}
