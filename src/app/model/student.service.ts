import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Student} from './student.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export const REST_URL = new InjectionToken('rest_url');
@Injectable()
export class StudentService {
  constructor(private http: HttpClient,
              @Inject(REST_URL) private url: string) {}

    getData(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }
}
