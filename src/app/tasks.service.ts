import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  public date =new Date();
  public taskid=0;
public obj :any=[];
myob:ITasks={  
  ListId:0,
  id:0,
  name:"string",
  description:"String",
  creating_date:this.date,
  lastupdate:this.date,
  start_date:this.date,
  end_date:this.date,
  current_state:0};

  gettask():Observable<ITasks[]>{
    let text = localStorage.getItem("taskarray");
     let obj;
    if (text!=null){ obj = JSON.parse(text); } 
    return obj;
     
   }
  settask(get_list_id:number,itemname:string){
   this.myob={ ListId:get_list_id,
    id:++this.taskid,
    name:itemname,
    description:"description",
    creating_date:this.date,
    lastupdate:this.date,
    start_date:this.date,
    end_date:this.date,
    current_state:0};
 
   let text = localStorage.getItem("taskarray");
 
   if (text!=null){
      this.obj = JSON.parse(text); } 
     this.obj.push(this.myob);
    const myJSON = JSON.stringify(this.obj);
 localStorage.setItem("taskarray", myJSON);
   
   
 
  }

}