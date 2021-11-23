import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from '../listService/list';
import { ITasks } from '../taskService/tasks';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  private listUrl="http://localhost:8080/api/v1/list";
  private taskUrl="http://localhost:8080/api/v1/task";
 
  constructor(private http :HttpClient) {}
  public listArray: IList[] = [];
  public listArrayName = 'listarray';


  getLists(): Observable <IList[]> {
   /* let text = localStorage.getItem(this.listArrayName);
    let obj;
    if (text != null) {
      obj = JSON.parse(text);
    }
    return obj;*/
    return this.http.get<IList[]>(`${this.listUrl}`);
  }
 
  addLists(obj: IList): Observable<IList> {
    
    /*let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    this.listArray.push(obj);
    const myJSON = JSON.stringify(this.listArray);
    localStorage.setItem(this.listArrayName, myJSON);*/
   
    return this.http.post<IList>(this.listUrl, obj);

  }
 
  
  deleteLists(list: IList): Observable<any> {
   

  /*  let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    let equaledList = this.listArray.filter(
      (value: IList) => value.id !== list.id
    );
    this.listArray = equaledList;

    const myJSON = JSON.stringify(equaledList);
    localStorage.setItem(this.listArrayName, myJSON);*/
   return this.http.delete(`${this.listUrl}/${list.id}`);
    
  }
  updateList(list: IList): Observable<any> {
   /* let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    let equaledList = this.listArray.filter(
      (value: IList) => value.id !== list.id
    );
    this.listArray = equaledList;
    this.listArray.push(list);
    const myJSON = JSON.stringify(this.listArray);
    localStorage.setItem(this.listArrayName, myJSON);*/
    return this.http.put(this.listUrl, list);

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
 
  getTasks(listId:number): Observable <ITasks[]> {
   /* let text = localStorage.getItem(this.listArrayName);
    
    if (text != null) {
      this.listArray = JSON.parse(text);
    }
    let emptytask:ITasks[]=[];
    let tasklist= this.listArray.find((value: IList) => value.id === listId)
   if(tasklist) return tasklist.tasks;
   else return emptytask;*/
   return this.http.get<ITasks[]>(`${this.taskUrl}/${listId}`);
  }

  addTasks(obj: ITasks ,listId:number): Observable<ITasks> {
  /*  let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
   let emptytask= this.listArray.find((value: IList) => value.id === listId);
    emptytask?.tasks.push(obj);
  if(emptytask) { let updateListaray = {
      id: listId,
      name: emptytask?.name,
      creating_date: emptytask?.creating_date,
      last_update: new Date(),
      tasks:emptytask?.tasks,
    };
    this.updateList(updateListaray);
  }*/
    return this.http.post<ITasks>(this.taskUrl, obj);

  }

  deleteTasks(task:ITasks,listId: number): Observable<ITasks> {
/*    let text = localStorage.getItem(this.listArrayName);

    if (text != null) {
      this.listArray = JSON.parse(text);
    }
   let theList= this.listArray.find((value: IList) => value.id === listId);

    if(theList) { let updateListaray = {
      id: listId,
      name: theList?.name,
      creating_date: theList?.creating_date,
      last_update: new Date(),
      tasks:theList?.tasks.filter(
        (value: ITasks) => value.id !== task.id
      ),
    };
    this.updateList(updateListaray);
   
    } */
    return this.http.delete<ITasks>(`${this.taskUrl}/${listId}`);

  }

 
  updateTask(task: ITasks,listId: number): Observable<ITasks> {
   /* let text = localStorage.getItem(this.listArrayName);

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
      last_update: new Date(),
      tasks:equaledtask,
    };
    this.updateList(updateListaray);
    }*/
    return this.http.put<ITasks>(this.taskUrl, task);

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


