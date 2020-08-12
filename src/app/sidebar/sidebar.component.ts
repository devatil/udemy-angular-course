import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  basliklar = [
    {
      baslik: 'Home',
      path: 'home',
    },
    {
      baslik: 'Role',
      path: 'role',
    },
    {
      baslik: 'User',
      path: 'user',
    },
    {
      baslik: 'Local Storage',
      path: 'storage',
    },
    {
      baslik: 'Data Binding',
      path: 'data-binding',
    },
    {
      baslik: 'Directive',
      path: 'directive',
    },
    {
      baslik: 'Pipes',
      path: 'pipes',
    },
    {
      baslik: 'Parents',
      path: 'parents',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

// <span igxDrawerItem igxRipple routerLink="home">Home</span>
//   <span igxDrawerItem igxRipple routerLink="role">Role</span>
//   <span igxDrawerItem igxRipple routerLink="user">User</span>
//   <span igxDrawerItem igxRipple routerLink="storage">Local Storage</span>
// <span igxDrawerItem igxRipple routerLink="directive">Directive</span>
//   <span igxDrawerItem igxRipple routerLink="data-binding"
//   >Data Binding</span
// >
