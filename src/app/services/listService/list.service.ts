import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStoreService } from '../localStore/local-store.service';
import { ITasks } from '../taskService/tasks';
import { IList } from './list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
   public listid :number ;
  constructor(private _LocalStoreService: LocalStoreService) {
   if (this.getList().length==0) this.listid=0;
   else this.listid=this._LocalStoreService.getLastList();

  }

 
  getList(): IList[] {
    return this._LocalStoreService.getLists();
  }

  addList(itemname: string) {
    let newListObject = {
      id: this.listid++,
      name: itemname,
      creating_date: new Date(),
      lastupdate: new Date(),
      tasks:[],
    };
    this._LocalStoreService.addLists(newListObject);
  }

  deleteList(list: IList) {
    this._LocalStoreService.deleteLists(list);
  }

  renameList(list: IList, newName: string) {
    let updateListName = {
      id: list.id,
      name: newName,
      creating_date: list.creating_date,
      lastupdate: new Date(),
      tasks:list.tasks,
    };
    this._LocalStoreService.updateList(updateListName);
  }


  getTask(listId:number): ITasks[] {
    return this._LocalStoreService.getTasks(listId);
  }
  addTask(get_list_id: number, itemname: string,description:string ,start_date:Date,end_date:Date) {
    let newTaskObject = {
      ListId: get_list_id,
      id: this._LocalStoreService.getLastTask(get_list_id),
      name: itemname,
      description: description,
      creating_date: new Date(),
      lastupdate: new Date(),
      start_date: start_date,
      end_date: end_date,
      current_state: 'NOT Start',
    };

    this._LocalStoreService.addTasks(newTaskObject ,get_list_id);
  }

  deleteTask(task: ITasks ,get_list_id: number) {
    this._LocalStoreService.deleteTasks(task,get_list_id);
  }
  updateTask(task: ITasks, newName: string,newDiscription: string ,startDate:Date,endDate:Date,state:string,get_list_id: number) {
    let updateTaskName = {
      ListId: task.ListId,
      id: task.id,
      name: newName,
      description: newDiscription,
      creating_date: task.creating_date,
      lastupdate: new Date(),
      start_date: startDate,
      end_date: endDate,
      current_state: state,
    };
    this._LocalStoreService.updateTask(updateTaskName,get_list_id);
  }


}
