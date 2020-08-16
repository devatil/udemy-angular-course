import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../libs/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  roleData;
  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getRoles();
  }
  getRoles() {
    this.roleService.getRoleData().subscribe((data) => {
      this.roleData = data;
    });
  }
}
