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

import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { taskmodalComponent } from './component/addmodal/taskmodalComponent';
import { DatabaseService } from './services/databaseService/database.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TasksInsideComponent,
    PageNotFoundComponent,
    AddmodalComponent,
    taskmodalComponent,
    //NgbModule,
    //NgbDate
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbDatepickerModule,HttpClientModule],
  providers: [ ListService, LocalStoreService,DatabaseService],
  bootstrap: [AppComponent],
  entryComponents: [AddmodalComponent ,taskmodalComponent],
})
export class AppModule {}
