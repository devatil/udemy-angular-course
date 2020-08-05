import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserComponent } from '../user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
	{
		path: '',
		component: UserListComponent
	},
	{
		path: ':id',
		component: UserComponent,
		children: [
			{
				path: 'details',
				component: UserDetailComponent
			},
			{
				path: 'role',
				component: UserRoleComponent
			},
			{
				path: '',
				redirectTo: 'details',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	declarations: [ UserListComponent, UserRoleComponent, UserComponent, UserDetailComponent ],
	imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class UserModule {}
