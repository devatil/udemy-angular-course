import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
  },
];

@NgModule({
  declarations: [PipesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PipesModule {}
