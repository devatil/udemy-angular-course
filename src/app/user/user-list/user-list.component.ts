import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../libs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userData;
  users = [];
  randomUser = [
    {
      id: 1,
      name: 'Kullanici 1',
    },
    {
      id: 2,
      name: 'Kullanici 2',
    },
    {
      id: 3,
      name: 'Kullanici 3',
    },
    {
      id: 4,
      name: 'Kullanici 4',
    },
    {
      id: 5,
      name: 'Kullanici 5',
    },
    {
      id: 6,
      name: 'Kullanici 6',
    },
    {
      id: 7,
      name: 'Kullanici 7',
    },
  ];
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

  getRandomUser() {
    const index = Math.floor(Math.random() * 7);
    this.users.push(this.randomUser[index]);
  }
}
