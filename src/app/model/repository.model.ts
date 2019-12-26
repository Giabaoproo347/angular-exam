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
      student.id = this.generateID();
      this.students.push(student);
    } else {
      const  index = this.students.findIndex(s => this.locator(s, student.id));
      this.students.splice(index, 1 , student);
    }
  }

  deleteStudent(id: number) {
    const  index = this.students.findIndex(s => this.locator(s, id));
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getStudent(candidate) != null) {
      candidate++;
    }
    return  candidate;
  }
}
