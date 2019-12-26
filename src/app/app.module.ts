import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './core/form/form.component';
import { TableComponent } from './core/table/table.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule
  ],
  bootstrap: [TableComponent, FormComponent]
})
export class AppModule { }
