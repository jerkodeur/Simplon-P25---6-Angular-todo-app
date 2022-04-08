import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToToLayoutComponent } from './components/to-to-layout/to-to-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoFormComponent,
    NavbarComponent,
    ToToLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
