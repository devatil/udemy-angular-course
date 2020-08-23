import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../libs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  formToUpload: File = null;
  images = [];
  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  handleFileUpload(files: FileList) {
    this.formToUpload = files.item(0);
  }

  uploadFiles() {
    this.uploadService.upload(this.formToUpload).subscribe(
      (res) => {
        this.images.push(res[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
