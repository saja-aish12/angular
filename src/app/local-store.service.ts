import { Injectable } from '@angular/core';
import { IList } from './list';
import { ITasks } from './tasks';

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
    this.deleteListsTasks(list.id);

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
  renameList(list: IList) {
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

  getTasks(): ITasks[] {
    let text = localStorage.getItem(this.taskArrayName);
    let obj;
    if (text != null) {
      obj = JSON.parse(text);
    }
    return obj;
  }

  addTasks(obj: ITasks) {
    let text = localStorage.getItem(this.taskArrayName);

    if (text != null) {
      this.taskArray = JSON.parse(text);
    }
    this.taskArray.push(obj);
    const myJSON = JSON.stringify(this.taskArray);
    localStorage.setItem(this.taskArrayName, myJSON);
  }

  deleteTasks(task: ITasks) {
    let text = localStorage.getItem(this.taskArrayName);

    if (text != null) {
      this.taskArray = JSON.parse(text);
    }
    let equaledtask = this.taskArray.filter(
      (value: ITasks) => value.id !== task.id
    );
    this.taskArray = equaledtask;

    const myJSON = JSON.stringify(equaledtask);
    localStorage.setItem(this.taskArrayName, myJSON);
  }

  deleteListsTasks(listId: number) {
    let text = localStorage.getItem(this.taskArrayName);

    if (text != null) {
      this.taskArray = JSON.parse(text);
    }
    let equaledtask = this.taskArray.filter(
      (value: ITasks) => value.ListId !== listId
    );
    this.taskArray = equaledtask;

    const myJSON = JSON.stringify(equaledtask);
    localStorage.setItem(this.taskArrayName, myJSON);
  }
  renametask(task: ITasks) {
    let text = localStorage.getItem(this.taskArrayName);

    if (text != null) {
      this.taskArray = JSON.parse(text);
    }
    let equaledtask = this.taskArray.filter(
      (value: ITasks) => value.id !== task.id
    );
    this.taskArray = equaledtask;
    this.taskArray.push(task);
    const myJSON = JSON.stringify(this.taskArray);
    localStorage.setItem(this.taskArrayName, myJSON);
  }
}
