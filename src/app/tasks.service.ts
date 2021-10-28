import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  public taskid=0;
public obj :any=[];
myob:ITasks={  
  ListId:0,
  id:0,
  name:"string",
  description:"String",
  creating_date:new Date(),
  lastupdate:new Date(),
  start_date:new Date(),
  end_date:new Date(),
  current_state:"NOT Start"};

  getTask():ITasks[]{
    let text = localStorage.getItem("taskarray");
     let obj;
    if (text!=null){ obj = JSON.parse(text); } 
    return obj;
     
   }
  addTask(get_list_id:number,itemname:string){
   this.myob={ ListId:get_list_id,
    id:this.taskid++,
    name:itemname,
    description:"description",
    creating_date:new Date(),
    lastupdate:new Date(),
    start_date:new Date(),
    end_date:new Date(),
    current_state:"NOT Start"};
 
   let text = localStorage.getItem("taskarray");
 
   if (text!=null){
      this.obj = JSON.parse(text); } 
     this.obj.push(this.myob);
    const myJSON = JSON.stringify(this.obj);
 localStorage.setItem("taskarray", myJSON);
   
   
 
  }
  
  deleteTask(task:ITasks){
    let text = localStorage.getItem("taskarray");
    
    if (text!=null){ this.obj = JSON.parse(text); }
    let equaledList= this.obj.filter((value: ITasks) => value.id !== task.id);
    this.obj=equaledList;
    
    const myJSON = JSON.stringify(equaledList);
    localStorage.setItem("taskarray", myJSON);
 
     
   }

}