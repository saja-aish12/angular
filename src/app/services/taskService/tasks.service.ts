import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStoreService } from '../localStore/local-store.service';
import { ITasks } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
    public taskid :number=0;
  constructor(private _LocalStoreService: LocalStoreService) {

  }

 /* getTask(listId:number): ITasks[] {
    return this._LocalStoreService.getTasks();
  }
  addTask(get_list_id: number, itemname: string) {
    let newTaskObject = {
      ListId: get_list_id,
      id: this._LocalStoreService.getLastTask(get_list_id),
      name: itemname,
      description: 'No description',
      creating_date: new Date(),
      lastupdate: new Date(),
      start_date: new Date(),
      end_date: new Date(),
      current_state: 'NOT Start',
    };

    this._LocalStoreService.addTasks(newTaskObject);
  }

  deleteTask(task: ITasks) {
    this._LocalStoreService.deleteTasks(task);
  }
  renameTask(task: ITasks, newName: string) {
    let updateTaskName = {
      ListId: task.ListId,
      id: task.id,
      name: newName,
      description: 'description',
      creating_date: task.creating_date,
      lastupdate: new Date(),
      start_date: task.start_date,
      end_date: task.end_date,
      current_state: 'NOT Start',
    };
    this._LocalStoreService.updateTask(updateTaskName);
  }

  changeTaskDiscription(task: ITasks, newDiscription: string) {
    let updatetaskDiscription = {
      ListId: task.ListId,
      id: task.id,
      name:task.name,
      description: newDiscription,
      creating_date: task.creating_date,
      lastupdate: new Date(),
      start_date: task.start_date,
      end_date: task.end_date,
      current_state: 'NOT Start',
    };
    this._LocalStoreService.updateTask(updatetaskDiscription);
  }
*/
}
