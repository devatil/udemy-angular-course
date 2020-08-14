import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BlacklistValidator,
  UserNameExistValidator,
  UserService,
  whiteSpaceValidator,
} from '../../../libs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  registerForm: FormGroup;
  user = {
    username: 'alisa',
    age: 34,
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.resetForm();
  }
  randomUserName(event: any) {
    this.registerForm.patchValue({
      userName: 'test123',
      age: 24,
    });
  }
  save(event: any) {
    this.user = event.value;
    console.log('this user saved', this.user);
  }

  resetForm() {
    this.registerForm = new FormGroup({
      userName: new FormControl(this.user ? this.user.username : '', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          BlacklistValidator('j'),
          whiteSpaceValidator,
        ],
        updateOn: 'change',
        asyncValidators: [UserNameExistValidator(this.userService)],
      }),
      age: new FormControl(0),
    });
  }
}
