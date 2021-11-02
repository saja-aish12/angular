import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddmodalComponent } from './component/addmodal/addmodal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { TasksInsideComponent } from './component/tasks-inside/tasks-inside.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { ListService } from './services/listService/list.service';
import { LocalStoreService } from './services/localStore/local-store.service';
import { TasksService } from './services/taskService/tasks.service';

import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TasksInsideComponent,
    PageNotFoundComponent,
    AddmodalComponent,
    
    //NgbModule,
    //NgbDate
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbDatepickerModule],
  providers: [TasksService, ListService, LocalStoreService],
  bootstrap: [AppComponent],
  entryComponents: [AddmodalComponent],
})
export class AppModule {}
