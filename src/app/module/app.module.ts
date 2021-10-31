import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { ToDoListComponent } from '../component/to-do-list/to-do-list.component';
import { TasksInsideComponent } from '../component/tasks-inside/tasks-inside.component';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';
import { TasksService } from '../services/taskService/tasks.service';
import { ListService } from '../services/listService/list.service';
import { LocalStoreService } from '../services/localStore/local-store.service';
/*import { TasksInsideComponent } from './tasks-inside/tasks-inside.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TasksService } from './tasks.service';
import { ListService } from './list.service';
import { LocalStoreService } from './local-store.service';*/

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TasksInsideComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TasksService, ListService, LocalStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
