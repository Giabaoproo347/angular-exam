import { NgModule } from '@angular/core';
import {Model} from './repository.model';
import {REST_URL, StudentService} from './student.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports: [HttpClientModule],
  providers: [Model, StudentService, {
    provide: REST_URL, useValue: `http://jsonplaceholder.typicode.com/posts`
  }]
})
export class ModelModule { }
