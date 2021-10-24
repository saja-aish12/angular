import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TasksInsideComponent } from './tasks-inside/tasks-inside.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [{path:'',redirectTo:'/list',pathMatch:'full'},
{path:'list/:id',component:TasksInsideComponent},
{path:'list',component:ToDoListComponent},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinglistComponents=[ToDoListComponent,TasksInsideComponent,PageNotFoundComponent]