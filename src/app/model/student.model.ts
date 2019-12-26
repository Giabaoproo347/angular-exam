import {ValidatorFn} from '@angular/forms';

export class Student {
  constructor(public id?: number,
              public name?: string,
              public age?: number,
              public address?: string) {
  }
}
