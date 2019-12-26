import {Component, Inject} from '@angular/core';
import {Student} from '../../model/student.model';
import {Model} from '../../model/repository.model';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {Observer} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private model: Model,
              @Inject(SHARED_STATE) private observer: Observer<SharedState>) { }

  getStudents(): Student[] {
    return this.model.getStudents();
  }
  getStudent(id: number): Student {
    return this.model.getStudent(id);
  }
  deleteStudent(id: number) {
    return this.model.deleteStudent(id);
  }
  editStudent(id: number) {
    this.observer.next(new SharedState(MODES.EDIT, id));
  }
  createStudent() {
    this.observer.next(new SharedState(MODES.CREAT));
  }

}
