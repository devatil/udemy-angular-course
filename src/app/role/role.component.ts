import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoleService } from '../../libs/services/role.service';
import { NgForm } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit, OnDestroy {
  roleData;

  private sub = new SubSink();
  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getRoles();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRoles() {
    this.sub.add(
      this.roleService.getRoleData().subscribe((data) => {
        this.roleData = data;
      })
    );
  }

  addRole(role: NgForm) {
    this.sub.add(
      this.roleService.addNewRole(role.value).subscribe(
        (data) => this.getRoles(),
        (error) => alert('something wrong')
      )
    );
  }

  editNewRole(role: NgForm) {
    this.sub.add(
      this.roleService.editRole(role.value).subscribe(
        (data) => this.getRoles(),
        (error) => alert('put medtodunda bir hata var')
      )
    );
  }

  deleteNewRole(role: NgForm) {
    this.sub.add(
      this.roleService.deleteRole(role.value).subscribe(
        (data) => this.getRoles(),
        (error) => alert('Someting wrong with delete crud metod')
      )
    );
  }
}
