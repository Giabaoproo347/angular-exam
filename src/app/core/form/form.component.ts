import {Component, Inject} from '@angular/core';
import {Student} from '../../model/student.model';
import {Model} from '../../model/repository.model';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  students: Student = new Student();
  constructor(private model: Model,
              @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    stateEvents.subscribe((update) => {
      this.students = new Student();
      if (update.id !== undefined) {
        Object.assign(this.students, this.model.getStudent(update.id));
      }
      this.editing = update.mode === MODES.EDIT;
    });
  }

  editing = false;
  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveStudent(this.students);
      this.students = new Student();
      form.reset();
    }
  }
  resetForm() {
    this.students = new Student();
  }
}
