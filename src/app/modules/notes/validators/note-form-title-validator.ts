import { AbstractControl, AsyncValidatorFn } from '@angular/forms';

export function noteFormTitleValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return new Promise((res, rej) => res(null));
  };
}
