import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from '../../libs';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UploadComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [UploadComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [UploadService],
})
export class UploadModule {}
