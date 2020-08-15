import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { AuthdeactivateGuard, AuthGuard } from '../libs';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'data-binding',
    loadChildren: () =>
      import('./data-binding/data-binding.module').then(
        (m) => m.DataBindingModule
      ),
  },
  {
    path: 'storage',
    loadChildren: () =>
      import('./storage/storage.module').then((m) => m.StorageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'directive',
    loadChildren: () =>
      import('./directives/directives.module').then((m) => m.DirectivesModule),
    canDeactivate: [AuthdeactivateGuard],
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'parents',
    loadChildren: () =>
      import('./parent1/parent1.module').then((m) => m.Parent1Module),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.AngularFormsModule),
  },

  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
