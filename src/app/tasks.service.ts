import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStoreService } from './local-store.service';
import { ITasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _LocalStoreService:LocalStoreService) { }
  public taskid=0;

  public taskArray :ITasks[]=[];
  public taskArrayName ="taskarray";


  getTask():ITasks[]{
    return this._LocalStoreService.getTasks();
   }
  addTask(get_list_id:number,itemname:string){
   
   let newTaskObject={ ListId:get_list_id,
    id:this.taskid++,
    name:itemname,
    description:"description",
    creating_date:new Date(),
    lastupdate:new Date(),
    start_date:new Date(),
    end_date:new Date(),
    current_state:"NOT Start"};
 
    this._LocalStoreService.addTasks(newTaskObject);
  
  }
  
  deleteTask(task:ITasks){
    this._LocalStoreService.deleteTasks(task);
   }

}