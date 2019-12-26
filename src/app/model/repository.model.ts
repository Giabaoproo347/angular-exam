import {Injectable} from '@angular/core';
import {Student} from './student.model';
import {StudentService} from './student.service';

@Injectable()
export class Model {
  private students: Student[] = new Array<Student>();
  private locator = (s: Student, id: number) => s.id === id;

  constructor(private dataSource: StudentService) {
    this.dataSource.getData().subscribe(data => this.students = data);
  }

  getStudents(): Student[] {
    return this.students;
  }

  getStudent(id: number): Student {
    return this.students.find(s => this.locator(s, id));
  }

  saveStudent(student: Student) {
    if (student.id === 0 || student.id === null) {
      this.dataSource.saveStudent(student).subscribe(s => this.students.push(s));
    } else {
      this.dataSource.updateStudent(student).subscribe(s => {
        const index = this.students.findIndex(item => this.locator(item, s.id));
        this.students.splice(index, 1, s);
      });
    }
  }

  deleteStudent(id: number) {
    this.dataSource.deleteStudent(id).subscribe(() => {
      const index = this.students.findIndex(s => this.locator(s, id));
      if (index > -1) {
        this.students.splice(index, 1);
      }
    });
  }
}
