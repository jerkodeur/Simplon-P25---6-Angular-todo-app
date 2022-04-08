import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToToLayoutComponent } from './components/to-to-layout/to-to-layout.component';

const routes: Routes = [
  {
  path: '', component: ToToLayoutComponent
  },
  {
  path: 'todos', component: ToToLayoutComponent
  },
  {
  path: 'todos/active', component: ToToLayoutComponent
  },
  {
  path: 'todos/completed', component: ToToLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
