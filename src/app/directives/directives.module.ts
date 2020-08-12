import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../libs';

const routes: Routes = [
  {
    path: '',
    component: DirectiveComponent,
  },
];

@NgModule({
  declarations: [DirectiveComponent, HighlightDirective],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class DirectivesModule {}
