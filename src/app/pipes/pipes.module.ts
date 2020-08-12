import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesComponent} from './pipes/pipes.component';
import {RouterModule, Routes} from '@angular/router';
import {CustomPipePipe, MyFilteringPipe} from '../../libs';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
  },
];

@NgModule({
  declarations: [PipesComponent, CustomPipePipe, MyFilteringPipe],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class PipesModule {}
