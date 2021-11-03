import { Injectable } from '@angular/core';
import { IList } from '../listService/list';
import { ITasks } from '../taskService/tasks';


@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  constructor() {}
  public listArray: IList[] = [];
  public listArrayName = 'listarray';

  public taskArray: ITasks[] = [];
  public taskArrayName = 'taskarray';

  getLists(): IList[] {
    let text = localStorage.getItem(this.listArrayName);
    let obj;
    if (text != null) {
      obj = JSON.parse(text);
    }
    return obj;
  }

  addLists(obj: IList) {
    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    this.listArray.push(obj);
    const myJSON = JSON.stringify(this.listArray);
    localStorage.setItem(this.listArrayName, myJSON);
  }

  deleteLists(list: IList) {
   

    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    let equaledList = this.listArray.filter(
      (value: IList) => value.id !== list.id
    );
    this.listArray = equaledList;

    const myJSON = JSON.stringify(equaledList);
    localStorage.setItem(this.listArrayName, myJSON);
  }
  updateList(list: IList) {
    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    let equaledList = this.listArray.filter(
      (value: IList) => value.id !== list.id
    );
    this.listArray = equaledList;
    this.listArray.push(list);
    const myJSON = JSON.stringify(this.listArray);
    localStorage.setItem(this.listArrayName, myJSON);
  }
  getLastList():number{
    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    let last=0;
   this.listArray.forEach(
      (value: IList) => last= value.id > last?value.id:last
    );
    return ++last;
  }
 
  getTasks(listId:number): ITasks[] {
    let text = localStorage.getItem(this.listArrayName);
    
    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    let emptytask:ITasks[]=[];
    let tasklist= this.listArray.find((value: IList) => value.id === listId)
   if(tasklist) return tasklist.tasks;
   else return emptytask;
  }

  addTasks(obj: ITasks ,listId:number) {
    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
   let emptytask= this.listArray.find((value: IList) => value.id === listId);
    emptytask?.tasks.push(obj);
  if(emptytask) { let updateListaray = {
      id: listId,
      name: emptytask?.name,
      creating_date: emptytask?.creating_date,
      lastupdate: new Date(),
      tasks:emptytask?.tasks,
    };
    this.updateList(updateListaray);
    }

    // if (emptytask !=null)emptytask.tasks.push(obj);
  }

  deleteTasks(task:ITasks,listId: number) {
    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
   let theList= this.listArray.find((value: IList) => value.id === listId);
   console.log(theList?.tasks);
    if(theList) { let updateListaray = {
      id: listId,
      name: theList?.name,
      creating_date: theList?.creating_date,
      lastupdate: new Date(),
      tasks:theList?.tasks.filter(
        (value: ITasks) => value.id !== task.id
      ),
    };
    this.updateList(updateListaray);
    //this.taskArray = equaledtask;
  //  console.log(updateListaray);
    } 
  }

 
  updateTask(task: ITasks,listId: number) {
    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
   let theList= this.listArray.find((value: IList) => value.id === listId);
   let equaledtask = theList?.tasks.filter(
    (value: ITasks) => value.id !== task.id
  );
  equaledtask = equaledtask?equaledtask:[];
  equaledtask.push(task);
    if(theList) { let updateListaray = {
      id: listId,
      name: theList?.name,
      creating_date: theList?.creating_date,
      lastupdate: new Date(),
      tasks:equaledtask,
    };
    this.updateList(updateListaray);



    }
  }
  
  getLastTask(listId:number):number{
    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
   let emptytask= this.listArray.find((value: IList) => value.id === listId);
  
    let last=0;
   emptytask?.tasks.forEach(
      (value: ITasks) => last= value.id > last?value.id:last
    );
    return ++last;
  }
}
