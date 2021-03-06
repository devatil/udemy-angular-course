import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserComponent } from '../user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { IgxButtonModule } from 'igniteui-angular';
import { AuthChildGuard } from '../../libs';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: ':id',
    component: UserComponent,
    children: [
      {
        path: 'details',
        component: UserDetailComponent,
      },
      {
        path: 'role',
        component: UserRoleComponent,
      },
      // {
      //   path: '',
      //   redirectTo: 'details',
      //   pathMatch: 'full',
      // },
    ],
    canActivateChild: [AuthChildGuard],
  },
];

@NgModule({
  declarations: [
    UserListComponent,
    UserRoleComponent,
    UserComponent,
    UserDetailComponent,
  ],
  imports: [CommonModule, IgxButtonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
