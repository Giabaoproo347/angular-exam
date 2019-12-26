import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';
import {SHARED_STATE, SharedState} from './sharedState.model';
import {Subject} from 'rxjs';
import {StatePipe} from './state.pipe';



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TableComponent, FormComponent, StatePipe],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]})
export class CoreModule { }
