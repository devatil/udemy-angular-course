import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: DirectiveComponent
	}
];

@NgModule({
	declarations: [ DirectiveComponent ],
	imports: [ CommonModule, RouterModule.forChild(routes), FormsModule ]
})
export class DirectivesModule {}
