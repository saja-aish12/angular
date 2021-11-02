import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmodalComponent } from './component/addmodal/addmodal.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { TasksInsideComponent } from './component/tasks-inside/tasks-inside.component';

import { ToDoListComponent } from './component/to-do-list/to-do-list.component';




const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list_tasks/:id', component: TasksInsideComponent },
  { path: 'list', component: ToDoListComponent },
  { path: 'modal', component: AddmodalComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routinglistComponents = [
  ToDoListComponent,
  TasksInsideComponent,
  PageNotFoundComponent,AddmodalComponent,
];
