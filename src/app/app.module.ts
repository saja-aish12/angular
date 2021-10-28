import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TasksInsideComponent } from './tasks-inside/tasks-inside.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TasksService } from './tasks.service';
import { ListService } from './list.service';
import { LocalStoreService } from './local-store.service';

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
