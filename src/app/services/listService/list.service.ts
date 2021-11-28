import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../databaseService/database.service';
import { LocalStoreService } from '../localStore/local-store.service';
import { ITasks } from '../taskService/tasks';
import { IList } from './list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
   public listid :number ;
  constructor(private _DataBaseService: DatabaseService ) {
   if (this.getList().pipe.length==0) this.listid=0;
   else this.listid=100;

  }

 
  getList(): Observable<IList[]> {
    return this._DataBaseService.getLists();
  }

  addList(itemname: string) {
    let newListObject = {
      id: this.listid++,
      name: itemname,
      creating_date: new Date(),
      last_update: new Date(),
      tasks:[],
    };
    this._DataBaseService.addLists(newListObject).subscribe((data) =>{
      
    });
  }

  deleteList(list: IList): Observable<any> {
    
   return this._DataBaseService.deleteLists(list);
  }

  renameList(list: IList, newName: string) {
    console.log(list);
    let updateList = {
      id: list.id,
      name: newName,
      creating_date: list.creating_date,
      last_update: new Date(),
      tasks:list.tasks,
    };console.log(updateList);
    this._DataBaseService.updateList(updateList).subscribe((data) =>{
      
    });
  }


  getTask(listId:number): Observable<ITasks[]> {
  //  return this._LocalStoreService.getTasks(listId);
  return this._DataBaseService.getTasks(listId);  
}
  addTask(get_list_id: number, itemname: string,description:string ,start_date:Date,end_date:Date) 
  : Observable<any>{
    let newTaskObject = {
      list_id: get_list_id,
      id:100,
      name: itemname,
      description: description,
      creating_date: new Date(),
      last_update: new Date(),
      start_date: start_date,
      end_date: end_date,
      current_state: 'NOT Start',
    };

  return  this._DataBaseService.addTasks(newTaskObject ,get_list_id)
  }

  deleteTask(task: ITasks ): Observable<any>  {
    return  this._DataBaseService.deleteTasks(task);
  }
  updateTask(task: ITasks, newName: string,newDiscription: string ,startDate:Date,endDate:Date,state:string,get_list_id: number)
  :Observable<any> {
    let updateTaskName = {
      list_id: task.list_id,
      id: task.id,
      name: newName,
      description: newDiscription,
      creating_date: task.creating_date,
      last_update: new Date(),
      start_date: startDate,
      end_date: endDate,
      current_state: state,
    };
    return this._DataBaseService.updateTask(updateTaskName,get_list_id);
  }


}
