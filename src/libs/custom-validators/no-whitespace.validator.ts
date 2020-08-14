import { FormControl } from '@angular/forms';

export function whiteSpaceValidator(control: FormControl) {
  let result = false;

  if (
    control.value.toString().replace(/\s/g, '') === control.value.toString()
  ) {
    result = true;
  } else {
    result = false;
  }

  return result ? null : { whitespace: true };
}
